<?php

namespace rebzden\toast;


use yii\web\AssetBundle;

class ToastWidgetAsset extends AssetBundle
{

    /**
     * @inheritdoc
     */
    public $sourcePath = __DIR__ . '/assets';

    /**
     * @inheritdoc
     */
    public $js = [
        'js/iziToast.min.js',
        'js/toast.js'
    ];
    /**
     * @inheritdoc
     */
    public $css = [
        'js/iziToast.min.css',
    ];
}