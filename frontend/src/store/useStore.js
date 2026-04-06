import { create } from 'zustand';

const useStore = create((set) => ({
  // Auth
  user: null,                    // { id, githubUsername, avatarUrl, skillLevel, skillLabel, solvedCount, primary_language }
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),

  // Session
  currentSession: null,          // { id, challenge, userA, userB, status, startedAt }
  setCurrentSession: (currentSession) => set({ currentSession }),

  // Editor
  editorCode: '',                
  setEditorCode: (editorCode) => set({ editorCode }),
  remoteCursors: {},             
  setRemoteCursor: (uid, pos) => set((state) => ({
    remoteCursors: { ...state.remoteCursors, [uid]: pos }
  })),
  remoteTyping: {},              
  setRemoteTyping: (uid, val) => set((state) => ({
    remoteTyping: { ...state.remoteTyping, [uid]: val }
  })),

  // Chat
  messages: [],                  
  addMessage: (msg) => set((state) => ({
    messages: [...state.messages, msg]
  })),
  clearMessages: () => set({ messages: [] }),

  // Matching
  matchingStatus: 'idle',        // 'idle' | 'searching' | 'found'
  setMatchingStatus: (matchingStatus) => set({ matchingStatus }),
  matchedPartner: null,          
  setMatchedPartner: (matchedPartner) => set({ matchedPartner }),

  // Leaderboard
  leaderboard: [],
  setLeaderboard: (leaderboard) => set({ leaderboard }),
}));

export default useStore;
