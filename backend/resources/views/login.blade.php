<form action="/login" method="post">
    @csrf
    <input name="email" type="text">
    <input name="password" type="password">
    <input name="remember" type="checkbox">

    <button type="submit">Submit</button>

</form>