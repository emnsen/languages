<?php

$locales = json_decode(file_get_contents('./data.json'), true);

foreach (['en', 'ar', 'fa', 'he', 'tr'] as $language) {
  var_dump($locales[$language]);
}
