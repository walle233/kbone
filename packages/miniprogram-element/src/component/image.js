const mp = require('miniprogram-render')

const {
    cache,
    tool,
} = mp.$$adapter

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/image.html
 */
module.exports = {
    properties: [{
        name: 'renderingMode',
        get(domNode) {
            return domNode.getAttribute('rendering-mode') || ''
        },
    }, {
        name: 'src',
        get(domNode) {
            const window = cache.getWindow(domNode.$$pageId)
            return domNode.src ? tool.completeURL(domNode.src, window.location.origin, true) : ''
        },
    }, {
        name: 'mode',
        get(domNode) {
            return domNode.getAttribute('mode') || 'scaleToFill'
        },
    }, {
        name: 'webp',
        get(domNode) {
            return !!domNode.getAttribute('webp')
        },
    }, {
        name: 'lazyLoad',
        get(domNode) {
            return !!domNode.getAttribute('lazy-load')
        },
    }, {
        name: 'showMenuByLongpress',
        get(domNode) {
            return !!domNode.getAttribute('show-menu-by-longpress')
        },
    }],
    handles: {
        onImageLoad(evt) {
            this.callSingleEvent('load', evt)
        },

        onImageError(evt) {
            this.callSingleEvent('error', evt)
        },
    },
}
