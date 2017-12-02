var toast = new function Toast() {

    this.showSuccess = function (options) {
        if (!options) {
            options = {};
        }
        iziToast.success({
            id: 'success',
            title: options.title ? options.title : 'Success',
            message: options.message ? options.message : "",
            position: 'topRight',
            transitionIn: 'bounceInLeft',
            onOpened: options.onOpened ? options.onOpened : function (instance, toast) {
            },
            onClosed: options.onClosed ? options.onClosed : function (instance, toast, closedBy) {
            }
        });
    };

    this.showError = function (options) {
        if (!options) {
            options = {};
        }
        iziToast.error({
            id: 'error',
            title: options.title ? options.title : 'Error',
            message: options.message ? options.message : "",
            position: 'topRight',
            transitionIn: 'fadeInDown',
            onOpened: options.onOpened ? options.onOpened : function (instance, toast) {
            },
            onClosed: options.onClosed ? options.onClosed : function (instance, toast, closedBy) {
            }
        });
    };

    this.showInfo = function (options) {
        if (!options) {
            options = {};
        }
        iziToast.info({
            id: 'info',
            title: options.title ? options.title : 'Info',
            message: options.message ? options.message : "",
            position: 'topRight',
            transitionIn: 'fadeInDown',
            onOpened: options.onOpened ? options.onOpened : function (instance, toast) {
            },
            onClosed: options.onClosed ? options.onClosed : function (instance, toast, closedBy) {
            }
        });
    };
    this.showMessage = function (options) {
        iziToast[options.type]({
            id: options.type,
            title: options.title ? options.title : options.type,
            message: options.message ? options.message : "",
            position: 'topRight',
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX',
            timeout: 2000
        });
    };
};
