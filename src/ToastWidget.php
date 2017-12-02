<?php

namespace rebzden\toast;

use yii\base\Widget;

class ToastWidget extends Widget
{
    public function run()
    {
        $this->registerAssets();
        parent::run();
    }

    private function registerAssets()
    {
        $view = $this->getView();
        ToastWidgetAsset::register($view);
    }
}