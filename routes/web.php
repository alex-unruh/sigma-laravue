<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Dashboard
Route::get('/', function(){ return Inertia::render('Dashboard');})->name('dashboard');

// UI Kit
Route::get('/formlayout', function(){ return Inertia::render('ui/FormLayoutDemo');})->name('formlayout');
Route::get('/input', function(){ return Inertia::render('ui/InputDemo');})->name('input');
Route::get('/floatlabel', function(){ return Inertia::render('ui/FloatLabelDemo');})->name('floatlabel');
Route::get('/invalidstate', function(){ return Inertia::render('ui/InvalidStateDemo');})->name('invalidstate');
Route::get('/button', function(){ return Inertia::render('ui/ButtonDemo');})->name('button');
Route::get('/table', function(){ return Inertia::render('ui/TableDemo');})->name('table');
Route::get('/list', function(){ return Inertia::render('ui/ListDemo');})->name('list');
Route::get('/tree', function(){ return Inertia::render('ui/TreeDemo');})->name('tree');
Route::get('/panel', function(){ return Inertia::render('ui/PanelsDemo');})->name('panel');
Route::get('/overlay', function(){ return Inertia::render('ui/OverlayDemo');})->name('overlay');
Route::get('/menu', function(){ return Inertia::render('ui/MenuDemo');})->name('menu');
Route::get('/messages', function(){ return Inertia::render('ui/MessagesDemo');})->name('messages');
Route::get('/file', function(){ return Inertia::render('ui/FileDemo');})->name('file');
Route::get('/chart', function(){ return Inertia::render('ui/ChartDemo');})->name('chart');
Route::get('/misc', function(){ return Inertia::render('ui/MiscDemo');})->name('misc');

Route::get('/menu/confirmation', function(){ return Inertia::render('menu/ConfirmationDemo');})->name('menu.confirmation');
Route::get('/menu/payment', function(){ return Inertia::render('menu/PaymentDemo');})->name('menu.payment');
Route::get('/menu/personal', function(){ return Inertia::render('menu/PersonalDemo');})->name('menu.personal');
Route::get('/menu/seat', function(){ return Inertia::render('menu/SeatDemo');})->name('menu.seat');

// Utilities
Route::get('/display', function(){ return Inertia::render('utilities/DisplayDemo');})->name('display');
Route::get('/elevation', function(){ return Inertia::render('utilities/ElevationDemo');})->name('elevation');
Route::get('/flexbox', function(){ return Inertia::render('utilities/FlexBoxDemo');})->name('flexbox');
Route::get('/icons', function(){ return Inertia::render('utilities/Icons');})->name('icons');
Route::get('/grid', function(){ return Inertia::render('utilities/GridDemo');})->name('grid');
Route::get('/spacing', function(){ return Inertia::render('utilities/SpacingDemo');})->name('spacing');
Route::get('/typography', function(){ return Inertia::render('utilities/Typography');})->name('typography');
Route::get('/text', function(){ return Inertia::render('utilities/TextDemo');})->name('text');

// Pages
Route::get('/crud', function(){ return Inertia::render('pages/CrudDemo');})->name('crud');
Route::get('/calendar', function(){ return Inertia::render('pages/CalendarDemo');})->name('calendar');
Route::get('/timeline', function(){ return Inertia::render('pages/TimelineDemo');})->name('timeline');
Route::get('/empty', function(){ return Inertia::render('pages/EmptyPage');})->name('empty');

// Documentation
Route::get('/documentation', function(){ return Inertia::render('Documentation');})->name('documentation');

