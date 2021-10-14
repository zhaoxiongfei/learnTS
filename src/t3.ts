{
  const a = 'hello'
  console.log('xxxx: %s', a)
}

{

  let x = 20;
  while(x -= 1) {
    label: console.log('label')
    if (x < 10) continue label 10;
    console.log('noraml: %d', x)
  }

}