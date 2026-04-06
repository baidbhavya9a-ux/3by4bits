import React, { useRef, useEffect, useState, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import useStore from '../../store/useStore';
import socket from '../../lib/socket';
import { Rocket, Binary, Code2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

const CodeEditor = () => {
  const { editorCode, setEditorCode, user, currentSession } = useStore();
  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const [language, setLanguage] = useState('javascript');
  const [submitting, setSubmitting] = useState(false);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
    
    // Remote cursors listener
    socket.on('cursor:move', ({ userId, position }) => {
      // Logic for rendering remote cursors via deltaDecorations or widgets
      // (Simplified for MVP: focus on text syncing)
    });

    socket.on('editor:init', ({ code }) => {
      setEditorCode(code);
    });

    socket.on('editor:change', ({ delta, userId: senderId }) => {
      if (senderId !== user.id && editorRef.current) {
        const model = editorRef.current.getModel();
        // Since we send full value (Step 13 rule), set it
        if (model.getValue() !== delta) {
          model.setValue(delta);
        }
      }
    });

    return () => {
      socket.off('cursor:move');
      socket.off('editor:init');
      socket.off('editor:change');
    };
  };

  const handleEditorChange = (value) => {
    setEditorCode(value);
    socket.emit('editor:change', { 
      sessionId: currentSession.id, 
      delta: value, 
      userId: user.id 
    });
  };

  const onCursorChange = (e) => {
    socket.emit('cursor:move', {
      sessionId: currentSession.id,
      userId: user.id,
      position: { 
        lineNumber: e.position.lineNumber, 
        column: e.position.column 
      }
    });
  };

  const handleSubmit = () => {
    if (window.confirm('Submit your solution? This will end the session.')) {
      setSubmitting(true);
      socket.emit('session:submit', {
        sessionId: currentSession.id,
        userId: user.id,
        code: editorCode
      });
      toast.success('Solution submitted!');
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-bg-primary">
      <div className="h-10 px-4 flex items-center justify-between border-b border-border-subtle bg-bg-secondary/20">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setLanguage('javascript')}
            className={clsx(
              "px-3 h-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all",
              language === 'javascript' ? "text-blue-primary border-b-2 border-blue-primary" : "text-text-muted hover:text-text-primary"
            )}
          >
            <Code2 size={12} /> JavaScript
          </button>
          <button 
            onClick={() => setLanguage('python')}
            className={clsx(
              "px-3 h-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all",
              language === 'python' ? "text-blue-primary border-b-2 border-blue-primary" : "text-text-muted hover:text-text-primary"
            )}
          >
            <Binary size={12} /> Python
          </button>
        </div>

        <div className="text-[10px] text-text-muted font-bold flex items-center gap-3">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green"></span> SYNC ACTIVE</span>
          <span>TAB SIZE: 2</span>
        </div>
      </div>

      <div className="flex-1 relative group">
        <Editor
          height="100%"
          theme="vs-dark"
          language={language}
          value={editorCode}
          onMount={handleEditorDidMount}
          onChange={handleEditorChange}
          options={{
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
            fontLigatures: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            lineNumbers: 'on',
            renderLineHighlight: 'all',
            cursorBlinking: 'smooth',
            cursorSmoothCaretAnimation: 'on',
            smoothScrolling: true,
            padding: { top: 16, bottom: 16 },
            suggest: { showSnippets: true },
            tabSize: 2,
            automaticLayout: true,
          }}
        />

        <button 
          onClick={handleSubmit}
          disabled={submitting}
          className={clsx(
            "absolute bottom-8 right-8 btn-primary px-8 py-3 rounded-2xl flex items-center gap-3 shadow-2xl",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            submitting && "grayscale cursor-not-allowed opacity-50"
          )}
        >
          {submitting ? "SUBMITTED ✓" : <><Rocket size={18} /> SUBMIT SOLUTION</>}
        </button>
      </div>
    </div>
  );
};

import clsx from 'clsx';
export default CodeEditor;
