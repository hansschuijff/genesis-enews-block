/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import { TextControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	return (
		<TextControl
			{...useBlockProps()}
			value={attributes.name}
			onChange={(val) => setAttributes({ name: val })}
		/>
	);
}
// export default function Edit( { attributes, isSelected, setAttributes } ) {
// 	//   
// 	return (
// 		<div { ...useBlockProps() }>
// 			{ attributes.name && ! isSelected ? (
// 				<div>{ attributes.name }</div>
// 			) : (
// 				<Placeholder
// 					label="Gutenpride Block"
// 					instructions="Enter your details"
// 				>
// 					<TextControl
// 						label={ __('Name', 'genesis-enews-block' ) }
// 						value={ attributes.name }
// 						onChange={ ( value ) =>
// 							setAttributes( { name: value } )
// 						}
// 					/>
// 					<br/>
// 					<TextControl
// 						label={ __('Email address', 'genesis-enews-block' ) }
// 						value={ attributes.email }
// 						onChange={ ( value ) =>
// 							setAttributes( { email: value } )
// 						}
// 					/>
// 				</Placeholder>
// 			) }
// 		</div>
// 	);
// }
