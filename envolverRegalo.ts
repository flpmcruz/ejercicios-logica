function wrapping(gifts: string[]) {
  const result: string[] = [];

  function asteriscos(number: number) {
    let x: string = "";
    for (let i = 0; i <= number; i++) {
      x += "*";
    }
    return `${x}`;
  }

  gifts.map((gift, i) => {
    result.push(
      `${asteriscos(gift.length + 2)}\n*${gift}*\n${asteriscos(
        gift.length + 2
      )}`
    );
  });

  return result;
}
