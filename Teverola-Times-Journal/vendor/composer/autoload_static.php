<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit3203b977de2ad1f450567de7c26ea831
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit3203b977de2ad1f450567de7c26ea831::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit3203b977de2ad1f450567de7c26ea831::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit3203b977de2ad1f450567de7c26ea831::$classMap;

        }, null, ClassLoader::class);
    }
}
