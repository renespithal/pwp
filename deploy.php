<?php
namespace Deployer;

require 'recipe/laravel.php';

// Project name
set('application', 'pwp');

// Project repository
set('repository', 'git@gitlab.tesders.de:pwp/web.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', false);
set('keep_releases', 1);

// Writable dirs by web server 
set('allow_anonymous_stats', false);
set('writable_use_sudo', false);

// Hosts
host('master')
    ->hostname('pwp.tesders.de')
    ->user('www-pwp')
    ->set('deploy_path', '/var/www/pwp.tesders.de/public_html')
    ->set('branch', 'master')
    ->set('composer_options', '{{composer_action}} --verbose --prefer-dist --no-progress --no-interaction --optimize-autoloader');


task('build', function() {
    set('deploy_path', __DIR__ . '/.build');
    run('cd angular
    npm install
    npm run build');
})->local();

task('reload:php-fpm', function () {
    run('sudo /etc/init.d/php7.2-fpm reload');
});

task('upload', function () {
    upload(__DIR__ . "/public/angular/", '{{release_path}}/public/angular');
});

task('buildandupload', [
    'build',
    'upload'
]);

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.
before('deploy:symlink', 'artisan:migrate');
after('deploy', 'deploy:public_disk');

task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:vendors',
//    'deploy:writable',
    'artisan:storage:link',
    'artisan:view:clear',
    'artisan:cache:clear',
    'artisan:config:cache',
    'artisan:optimize',
    'upload',
    'deploy:symlink',
    'reload:php-fpm',
    'deploy:unlock',
    'cleanup',
]);
