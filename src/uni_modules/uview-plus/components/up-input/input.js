/*
 * @Author       : LQ,jry
 * @Description  :
 * @version      : 3.0
 * @Date         : 2021-08-20 16:44:21
 * @LastAuthor   : jry
 * @lastTime     : 2024-08-20 14:20:58
 * @FilePath     : /uview-plus/libs/config/props/input.js
 */
export default {
	// index 组件
	input: {
		value: '',
		type: 'text',
		fixed: false,
		disabled: false,
		disabledColor: '#f5f7fa',
		clearable: false,
		password: false,
		maxlength: 140,
		placeholder: null,
		placeholderClass: 'input-placeholder',
		placeholderStyle: 'color: #c0c4cc',
		showWordLimit: false,
		confirmType: 'done',
		confirmHold: false,
		holdKeyboard: false,
		focus: false,
		autoBlur: false,
		disableDefaultPadding: false,
		cursor: -1,
		cursorSpacing: 30,
		selectionStart: -1,
		selectionEnd: -1,
		adjustPosition: true,
		inputAlign: 'left',
		fontSize: '15px',
		color: '#303133',
		prefixIcon: '',
		prefixIconStyle: '',
		suffixIcon: '',
		suffixIconStyle: '',
		border: 'surround',
		readonly: false,
		shape: 'square',
		formatter: null
	}
}
