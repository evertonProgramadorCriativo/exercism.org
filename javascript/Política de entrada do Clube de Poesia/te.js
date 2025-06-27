function backDoorResponse(line) {
  const trimmedLine = line.trim();
  return trimmedLine[trimmedLine.length - 1];
}


 console.log(backDoorResponse('Sunshine warming my toes'))