"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

const avatars = [
  { src: "/prof-avatar.png", name: "Elite Coder" },
  { src: "/skin-druid.png", name: "UI Druid" },
  { src: "/skin-ninja.png", name: "Cyber Ninja" },
];

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const { user, updateUserProfile } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [selectedAvatarIdx, setSelectedAvatarIdx] = useState(0);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (user && isOpen) {
      setDisplayName(user.displayName || "");
      const currentAvatarIdx = avatars.findIndex(a => a.src === user.photoURL);
      if (currentAvatarIdx !== -1) {
        setSelectedAvatarIdx(currentAvatarIdx);
      }
    }
  }, [user, isOpen]);

  if (!isOpen) return null;

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateUserProfile(displayName, avatars[selectedAvatarIdx].src);
      onClose();
    } catch (error) {
      alert("Failed to update profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] border-2 border-slate-100 overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-300">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800"></div>
        
        <header className="p-8 pb-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-headline font-black uppercase text-blue-700 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Edit Profile
            </h2>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-1">Modify Your Legend State</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>

        <div className="p-8 pt-0 space-y-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-slate-50 shadow-xl relative z-10 overflow-hidden outline outline-1 outline-slate-100">
                <img
                  src={avatars[selectedAvatarIdx].src}
                  className="w-full h-full object-cover rounded-full"
                  alt="Chosen Avatar"
                />
              </div>
              <div className="absolute -inset-2 border border-dashed border-blue-600/20 rounded-full animate-spin-slow"></div>
            </div>

            <div className="flex justify-center gap-4">
              {avatars.map((avatar, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedAvatarIdx(idx)}
                  className={`w-12 h-12 rounded-xl border-2 transition-all overflow-hidden bg-white hover:-translate-y-1 active:translate-y-1 ${
                    selectedAvatarIdx === idx
                      ? "border-blue-600 shadow-md scale-110"
                      : "border-slate-100 opacity-40 grayscale hover:grayscale-0 hover:opacity-100"
                  }`}
                >
                  <img src={avatar.src} className="w-full h-full object-cover" alt={avatar.name} />
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block font-black uppercase text-[10px] text-blue-700 tracking-widest ml-1">
                Callsign (Username)
              </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-300 group-focus-within:text-blue-600 transition-colors">
                  alternate_email
                </span>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Your legend name"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 pl-12 font-bold text-slate-700 outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center gap-4 opacity-60 grayscale">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 text-slate-400">
                <span className="material-symbols-outlined text-xl">verified_user</span>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-slate-400 leading-none">Security Level</p>
                <p className="text-sm font-bold text-slate-700">Protocol Verified</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={onClose}
              className="flex-1 py-4 bg-slate-100 text-slate-500 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors"
            >
              Discard
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex-[2] py-4 bg-blue-700 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl shadow-[0_5px_0_0_#1e40af] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
            >
              {isSaving ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <span className="material-symbols-outlined text-lg">save</span>
              )}
              SAVE CHANGES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
