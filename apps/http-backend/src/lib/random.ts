export default function generateRandomString() {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  const bytes = crypto.getRandomValues(new Uint8Array(6));

  return Array.from(bytes, b => chars[b % chars.length]).join("");
}

