/**
 * @Author: HuaChao Chen <CHC>
 * @Date:   2017-05-03T00:31:20+08:00
 * @Email:  chenhuachaoxyz@gmail.com
 * @Filename: keydown-listen.js
 * @Last modified by:   chenhuachao
 * @Last modified time: 2017-12-04T00:03:33+08:00
 * @License: MIT
 * @Copyright: 2017
 */

/**
 * Created by zhy on 2017/4/24.
 */
const KEY_CODE = {
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    B: 66,
    I: 73,
    H: 72,
    U: 85,
    D: 68,
    M:77 ,
    Q: 81,
    O: 79,
    L: 76,
    S: 83,
    Z: 90,
    Y: 89,
    C: 67,
    T: 84,
    R: 82,
    DELETE: 8,
    TAB: 9,
    ENTER: 13,
    ONE: 97,
    TWO: 98,
    THREE: 99,
    FOUR: 100,
    FIVE: 101,
    SIX: 102,
    _ONE: 49,
    _TWO: 50,
    _THREE: 51,
    _FOUR: 52,
    _FIVE: 53,
    _SIX: 54
};
export const keydownListen = ($vm) => {
    $vm.$el.addEventListener('keydown', function (e) {
        // 注册监听键盘事件
        if (!(e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey) {
            // one key
            switch (e.keyCode) {
                case KEY_CODE.TAB: {
                    // TAB
                    if (!$vm.$refs.toolbar_left.s_img_link_open) {
                        e.preventDefault()
                        $vm.insertTab();
                    }
                    break;
                }
                case KEY_CODE.ENTER: {
                // enter
                if ($vm.$refs.toolbar_left.s_img_link_open) {
                    // 当添加外部链接的弹出层打开时， enter表示确定输入此链接
                    e.preventDefault()
                    $vm.$refs.toolbar_left.$imgLinkAdd();
                } else {
                    // 在文本框中输入enter
                    $vm.insertEnter(e)
                }
                break;
            }
            }
        } else if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey) {
            // control +
            switch (e.keyCode) {
                case KEY_CODE.Z: {
                    // Z
                    e.preventDefault()
                    $vm.toolbar_left_click('undo')
                    break;
                }
                case KEY_CODE.Y: {
                    // Y
                    e.preventDefault()
                    $vm.toolbar_left_click('redo')
                    break;
                }
            }
        } else if ((e.ctrlKey || e.metaKey) && e.altKey && !e.shiftKey) {
        } else if (!(e.ctrlKey || e.metaKey) && e.shiftKey && !e.altKey) {
            // shift +
            switch (e.keyCode) {
                case KEY_CODE.TAB: {
                    // TAB
                    if (!$vm.$refs.toolbar_left.s_img_link_open) {
                        e.preventDefault()
                        $vm.unInsertTab();
                    }
                    break;
                }
            }
        }
    });
}
