<?php

namespace App\Http\Controllers;

use App\Exports\MenteesExport;
use App\Exports\MentorExport;
use App\Exports\StatsExport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    /**
     *
     */
    public function exportStats() {

        Storage::disk('public')->makeDirectory('exports/');

        $zip = new \ZipArchive();
        $zip->open(
            $path = Storage::disk('public')->path('exports/export.zip'),
            \ZipArchive::CREATE
        );

        Excel::store(new MentorExport(), 'exports/stat-mentor.xlsx', 'public');
        Excel::store(new MenteesExport(), 'exports/stat-mentee.xlsx', 'public');

        $zip->addFile(Storage::disk('public')->path('exports/stat-mentor.xlsx'), 'mentors.xlsx');
        $zip->addFile(Storage::disk('public')->path('exports/stat-mentee.xlsx'), 'mentees.xlsx');
        $zip->close();

        return response()->download($path);

    }



}
