funcA()
{
    funcB();
}

funcB()
{
    funcC();
}

funcC()
{
    console.log(Error().stack);
}    
