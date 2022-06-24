export const play = (e) => e.preventDefault();
if (Number.isInteger(userNumber) && userNumber > 0 && userNumber <= 100) {
  setRound((round) => round + 1);
  setIsSame(userNumber == number);
} else {
  setError('Votre proposition doit être un nombre entre 1 et 100 !');
}
setUserNumber('');
