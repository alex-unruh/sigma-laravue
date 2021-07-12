<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Dashboard
Route::get('/', function(){ return Inertia::render('Dashboard');})->name('dashboard');

// UI Kit
Route::get('/formlayout', function(){ return Inertia::render('FormLayoutDemo');})->name('formlayout');
Route::get('/input', function(){ return Inertia::render('InputDemo');})->name('input');
Route::get('/floatlabel', function(){ return Inertia::render('FloatLabelDemo');})->name('floatlabel');
Route::get('/invalidstate', function(){ return Inertia::render('InvalidStateDemo');})->name('invalidstate');
Route::get('/button', function(){ return Inertia::render('ButtonDemo');})->name('button');
Route::get('/table', function(){ return Inertia::render('TableDemo');})->name('table');
Route::get('/list', function(){ return Inertia::render('ListDemo');})->name('list');
Route::get('/tree', function(){ return Inertia::render('TreeDemo');})->name('tree');
Route::get('/panel', function(){ return Inertia::render('PanelsDemo');})->name('panel');
Route::get('/overlay', function(){ return Inertia::render('OverlayDemo');})->name('overlay');
Route::get('/menu', function(){ return Inertia::render('MenuDemo');})->name('menu');
Route::get('/messages', function(){ return Inertia::render('MessagesDemo');})->name('messages');
Route::get('/file', function(){ return Inertia::render('FileDemo');})->name('file');
Route::get('/chart', function(){ return Inertia::render('ChartDemo');})->name('chart');
Route::get('/misc', function(){ return Inertia::render('MiscDemo');})->name('misc');

// Pages
Route::get('/empty', function(){ return Inertia::render('EmptyPage');})->name('empty');

