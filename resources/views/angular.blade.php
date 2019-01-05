<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Influenceme</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    @foreach ($styles as $style)
        <link href="angular/{{$style}}" rel="stylesheet">
    @endforeach
</head>
<body>
<app-root></app-root>
<script type="text/javascript">
    window.jwt_token = "{{ $jwt_token ?? '' }}";
</script>
@foreach ($scripts as $script)
    <script type="text/javascript" src="angular/{{$script}}"></script>
@endforeach
</html>
