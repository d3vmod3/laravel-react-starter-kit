<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class SampleController extends Controller
{
    public function index()
    {
         return Inertia::render('users/page');
    }

    public function getUsers()
    {

        return response()->json([
            'users' => User::all(),
        ]);
    }
}
