<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Dashboard
Route::get('/', fn() => Inertia::render('Dashboard'))->name('dashboard');

// UI Kit
Route::get('/formlayout', fn() => Inertia::render('FormLayoutDemo'))->name('formlayout');
Route::get('/input', fn() => Inertia::render('InputDemo'))->name('input');
Route::get('/floatlabel', fn() => Inertia::render('FloatLabelDemo'))->name('floatlabel');
Route::get('/invalidstate', fn() => Inertia::render('InvalidStateDemo'))->name('invalidstate');
Route::get('/button', fn() => Inertia::render('ButtonDemo'))->name('button');
Route::get('/table', fn() => Inertia::render('TableDemo'))->name('table');
Route::get('/list', fn() => Inertia::render('ListDemo'))->name('list');
Route::get('/tree', fn() => Inertia::render('TreeDemo'))->name('tree');
Route::get('/panel', fn() => Inertia::render('PanelsDemo'))->name('panel');
Route::get('/overlay', fn() => Inertia::render('OverlayDemo'))->name('overlay');
Route::get('/menu', fn() => Inertia::render('MenuDemo'))->name('menu');
Route::get('/messages', fn() => Inertia::render('MessagesDemo'))->name('messages');
Route::get('/file', fn() => Inertia::render('FileDemo'))->name('file');
Route::get('/chart', fn() => Inertia::render('ChartDemo'))->name('chart');
Route::get('/misc', fn() => Inertia::render('MiscDemo'))->name('misc');

// Pages
Route::get('/empty', fn() => Inertia::render('EmptyPage'))->name('empty');

