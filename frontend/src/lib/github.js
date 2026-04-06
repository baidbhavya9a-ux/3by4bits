const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:4000';
export const GITHUB_AUTH_URL = `${SOCKET_URL}/api/auth/github`;

export async function getMe() {
  try {
    const res = await fetch(`${SOCKET_URL}/api/auth/me`, {
      credentials: 'include'
    });
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    return null;
  }
}

export async function logout() {
  await fetch(`${SOCKET_URL}/api/auth/logout`, {
    method: 'POST',
    credentials: 'include'
  });
}
