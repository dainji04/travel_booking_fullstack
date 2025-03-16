@extends('layouts.app')

@section('title', 'HomePage')

@section('content')
<h1>Login</h1>
<form method="post" action="api/login">
    @csrf
    <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" name="email" class="form-control" id="inputEmail3">
        </div>
    </div>
    <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
            <input type="password" name="password" class="form-control" id="inputPassword3">
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-sm-10 offset-sm-2">
            <div class="form-check">
                <input class="form-check-input" name="save" type="checkbox" id="gridCheck1">
                <label class="form-check-label" for="gridCheck1">
                    save password
                </label>
            </div>
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
</form>
@endsection
