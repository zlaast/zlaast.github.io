<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  
      <defs>
        <linearGradient id="modernHeaderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#2d2d2d;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#262626;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1e1e1e;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="modernBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#1e1e1e;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#181818;stop-opacity:1" />
        </linearGradient>
        <filter id="modernGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="modernShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="rgba(0,0,0,0.4)"/>
        </filter>
        <filter id="controlGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="glow"/>
          <feMerge>
            <feMergeNode in="glow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <pattern id="scanlines" patternUnits="userSpaceOnUse" width="1" height="4">
          <rect width="1" height="2" fill="none"/>
          <rect width="1" height="1" y="2" fill="rgba(255,255,255,0.03)"/>
          <rect width="1" height="1" y="3" fill="none"/>
        </pattern>
        
      </defs>
    
  
      <style>
        /* Enhanced Base Styles with Professional Typography */
        .terminal-bg { 
          fill: #1e1e1e; 
          stroke: #333; 
          stroke-width: 1;
          filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.15));
        }
        .terminal-header { 
          fill: #2d2d2d; 
          stroke: #333; 
          stroke-width: 1;
        }
        .terminal-text { 
          fill: #ffffff; 
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace; 
          font-size: 14px; 
          font-weight: 400;
          text-rendering: optimizeLegibility;
          letter-spacing: 0.05em;
        }
        .terminal-output { 
          fill: #cccccc; 
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace; 
          font-size: 14px; 
          font-weight: 400;
          text-rendering: optimizeLegibility;
          letter-spacing: 0.05em;
        }
        .terminal-success { 
          fill: #4ade80; 
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace; 
          font-size: 14px; 
          font-weight: 500;
          
        }
        .terminal-warning { 
          fill: #fbbf24; 
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace; 
          font-size: 14px; 
          font-weight: 500;
          
        }
        .terminal-error { 
          fill: #ef4444; 
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace; 
          font-size: 14px; 
          font-weight: 500;
          
        }
        .terminal-info { 
          fill: #3b82f6; 
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace; 
          font-size: 14px; 
          font-weight: 500;
          
        }
        .terminal-title { 
          fill: #ffffff; 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; 
          font-size: 12px; 
          font-weight: 600;
          letter-spacing: 0.025em;
        }
        .terminal-cursor { 
          fill: #ffffff; 
          opacity: 1;
        }
        .terminal-prompt { 
          fill: #7c3aed; 
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace; 
          font-size: 14px; 
          font-weight: 600;
        }
        
        /* Enhanced Control Styles */
        .close { fill: #ff5f57; stroke: #e0443e; stroke-width: 0.5; }
        .minimize { fill: #ffbd2e; stroke: #dea123; stroke-width: 0.5; }
        .maximize { fill: #28ca42; stroke: #1aad2f; stroke-width: 0.5; }
        
        /* Professional Theme-specific Effects */
        
        
        
        
        
        
        
        
        /* Enhanced Cursor Animation */
        .cursor-blink {
          animation: blink 1.2s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 45% { opacity: 1; }
          50%, 95% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        /* Smooth Animations */
        text {
          transition: all 0.2s ease-in-out;
        }
        
        /* Accessibility Improvements */
        
      </style>
    
  
  
  <!-- Terminal container with professional shadow and border radius -->
  <rect x="0" y="0" width="800" height="400" rx="12" ry="12" 
        class="terminal-bg" filter="url(#modernShadow)"/>
  
  
  <!-- Terminal header with enhanced gradient and modern controls -->
  <rect x="0" y="0" width="800" height="40" rx="12" ry="12" 
        fill="url(#modernHeaderGradient)" stroke="#333" stroke-width="0.5"/>
  <rect x="0" y="28" width="800" height="12" fill="url(#modernHeaderGradient)"/>
  
  <!-- Professional macOS-style window controls -->
  <g class="terminal-controls">
    <circle cx="20" cy="20" r="6" class="close" filter="url(#controlGlow)"/>
    <circle cx="44" cy="20" r="6" class="minimize" filter="url(#controlGlow)"/>
    <circle cx="68" cy="20" r="6" class="maximize" filter="url(#controlGlow)"/>
    
    <!-- Enhanced control icons with better styling -->
    <g opacity="0.8">
      <line x1="17" y1="17" x2="23" y2="23" stroke="#4a1a1a" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="23" y1="17" x2="17" y2="23" stroke="#4a1a1a" stroke-width="1.2" stroke-linecap="round"/>
    </g>
    <line x1="41" y1="20" x2="47" y2="20" stroke="#4a3a00" stroke-width="1.2" stroke-linecap="round"/>
    <g opacity="0.8">
      <rect x="65" y="17" width="6" height="6" fill="none" stroke="#1a4a1a" stroke-width="1.2" rx="1"/>
      <rect x="67" y="15" width="4" height="4" fill="none" stroke="#1a4a1a" stroke-width="1" rx="0.5"/>
    </g>
  </g>
  
  <!-- Terminal title with improved typography -->
  <text x="400" y="26" text-anchor="middle" class="terminal-title" 
        style="font-size: 11px; font-weight: 500; letter-spacing: 0.3px; opacity: 0.9;">
    Terminal
  </text>
  
  <!-- Subtle header separator line -->
  <line x1="16" y1="40" x2="784" y2="40" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
  
  
  <!-- Terminal content area with subtle background -->
  <rect x="8" y="42" width="784" height="350" 
        fill="url(#modernBodyGradient)" rx="10" ry="10" opacity="0.95"/>
  
  <!-- Command animations with enhanced spacing -->
  
  <text x="26" y="86" class="terminal-text"><tspan opacity="0">$<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.002379447507927424s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.04130139564947208s" fill="freeze"/></tspan><tspan opacity="0">e<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.09583398763498169s" fill="freeze"/></tspan><tspan opacity="0">c<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.14376803020246817s" fill="freeze"/></tspan><tspan opacity="0">h<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.20249375080210993s" fill="freeze"/></tspan><tspan opacity="0">o<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.25149322327969353s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.2927159146797566s" fill="freeze"/></tspan><tspan opacity="0">&quot;<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.34276691811819654s" fill="freeze"/></tspan><tspan opacity="0">T<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.39778774829609653s" fill="freeze"/></tspan><tspan opacity="0">h<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.45919780661814813s" fill="freeze"/></tspan><tspan opacity="0">i<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.5056955727836863s" fill="freeze"/></tspan><tspan opacity="0">s<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.5523241272651538s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.5932659732977177s" fill="freeze"/></tspan><tspan opacity="0">i<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.6560983645402677s" fill="freeze"/></tspan><tspan opacity="0">s<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.6996963205548847s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.7564407977497678s" fill="freeze"/></tspan><tspan opacity="0">t<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.7952313063721689s" fill="freeze"/></tspan><tspan opacity="0">h<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.856714478185988s" fill="freeze"/></tspan><tspan opacity="0">e<animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.8940958348234747s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="0.9440082974994278s" fill="freeze"/></tspan><tspan opacity="0">g<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.0055534762164091s" fill="freeze"/></tspan><tspan opacity="0">i<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.0575622751246432s" fill="freeze"/></tspan><tspan opacity="0">t<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.1069355559267502s" fill="freeze"/></tspan><tspan opacity="0">h<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.1473751673700672s" fill="freeze"/></tspan><tspan opacity="0">u<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.1980791518258456s" fill="freeze"/></tspan><tspan opacity="0">b<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.2526868405511438s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.306340182015342s" fill="freeze"/></tspan><tspan opacity="0">r<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.3424312911589136s" fill="freeze"/></tspan><tspan opacity="0">e<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.4088121372363325s" fill="freeze"/></tspan><tspan opacity="0">p<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.441070978365617s" fill="freeze"/></tspan><tspan opacity="0">o<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.4964168898701744s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.5594933596819562s" fill="freeze"/></tspan><tspan opacity="0">f<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.6003111270848194s" fill="freeze"/></tspan><tspan opacity="0">o<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.6530856343827116s" fill="freeze"/></tspan><tspan opacity="0">r<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.7063496874809136s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.7499044133070614s" fill="freeze"/></tspan><tspan opacity="0">m<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.7906033436229771s" fill="freeze"/></tspan><tspan opacity="0">y<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.8586423578101943s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.9052805856866084s" fill="freeze"/></tspan><tspan opacity="0">b<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.958551577930264s" fill="freeze"/></tspan><tspan opacity="0">l<animate attributeName="opacity" values="0;1" dur="0.03s" begin="1.9909791735039555s" fill="freeze"/></tspan><tspan opacity="0">o<animate attributeName="opacity" values="0;1" dur="0.03s" begin="2.057591445453821s" fill="freeze"/></tspan><tspan opacity="0">g<animate attributeName="opacity" values="0;1" dur="0.03s" begin="2.1045173414465244s" fill="freeze"/></tspan><tspan opacity="0">&quot;<animate attributeName="opacity" values="0;1" dur="0.03s" begin="2.1406754882667367s" fill="freeze"/></tspan>
  </text>
  <text x="26" y="111.6" class="terminal-success" opacity="0">
    Git command executed
    <animate attributeName="opacity" 
             values="0;1" 
             dur="0.1s" 
             begin="2.7s" 
             fill="freeze"/>
  </text>
  <text x="26" y="149.2" class="terminal-text"><tspan opacity="0">$<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.0092269546485353s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.0550127631294255s" fill="freeze"/></tspan><tspan opacity="0">e<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.1071976083607025s" fill="freeze"/></tspan><tspan opacity="0">c<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.157004242928477s" fill="freeze"/></tspan><tspan opacity="0">h<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.2048014967977037s" fill="freeze"/></tspan><tspan opacity="0">o<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.2584919226949727s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.298999300328692s" fill="freeze"/></tspan><tspan opacity="0">&quot;<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.3456714626318287s" fill="freeze"/></tspan><tspan opacity="0">G<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.400764338247259s" fill="freeze"/></tspan><tspan opacity="0">o<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.4522518476611763s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.498070694080827s" fill="freeze"/></tspan><tspan opacity="0">t<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.545142766780318s" fill="freeze"/></tspan><tspan opacity="0">o<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.594130692652061s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.654827050648377s" fill="freeze"/></tspan><tspan opacity="0">h<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.6900130380060294s" fill="freeze"/></tspan><tspan opacity="0">t<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.749076077433415s" fill="freeze"/></tspan><tspan opacity="0">t<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.807655035462049s" fill="freeze"/></tspan><tspan opacity="0">p<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.856879289875442s" fill="freeze"/></tspan><tspan opacity="0">s<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.892828538695125s" fill="freeze"/></tspan><tspan opacity="0">:<animate attributeName="opacity" values="0;1" dur="0.03s" begin="3.9417564866901866s" fill="freeze"/></tspan><tspan opacity="0">/<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.002081593656177s" fill="freeze"/></tspan><tspan opacity="0">/<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.048680007194843s" fill="freeze"/></tspan><tspan opacity="0">z<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.102098957145498s" fill="freeze"/></tspan><tspan opacity="0">l<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.152074671828061s" fill="freeze"/></tspan><tspan opacity="0">a<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.203352395694045s" fill="freeze"/></tspan><tspan opacity="0">a<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.252245349109689s" fill="freeze"/></tspan><tspan opacity="0">s<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.304782503949391s" fill="freeze"/></tspan><tspan opacity="0">t<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.3455216465066595s" fill="freeze"/></tspan><tspan opacity="0">.<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.390729584570976s" fill="freeze"/></tspan><tspan opacity="0">g<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.446462309633369s" fill="freeze"/></tspan><tspan opacity="0">i<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.500408768345165s" fill="freeze"/></tspan><tspan opacity="0">t<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.548632871443865s" fill="freeze"/></tspan><tspan opacity="0">h<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.5900591943737075s" fill="freeze"/></tspan><tspan opacity="0">u<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.65399267879645s" fill="freeze"/></tspan><tspan opacity="0">b<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.709301474735459s" fill="freeze"/></tspan><tspan opacity="0">.<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.75940495904965s" fill="freeze"/></tspan><tspan opacity="0">i<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.791266253286467s" fill="freeze"/></tspan><tspan opacity="0">o<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.846961209041088s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.90841979893779s" fill="freeze"/></tspan><tspan opacity="0">t<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.959719920891436s" fill="freeze"/></tspan><tspan opacity="0">o<animate attributeName="opacity" values="0;1" dur="0.03s" begin="4.9992032632453824s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.053412430603454s" fill="freeze"/></tspan><tspan opacity="0">v<animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.1084973173089745s" fill="freeze"/></tspan><tspan opacity="0">i<animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.158927237290673s" fill="freeze"/></tspan><tspan opacity="0">s<animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.201319662466579s" fill="freeze"/></tspan><tspan opacity="0">i<animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.2445095952889s" fill="freeze"/></tspan><tspan opacity="0">t<animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.303276536471007s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.346025578653546s" fill="freeze"/></tspan><tspan opacity="0">t<animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.405399482565023s" fill="freeze"/></tspan><tspan opacity="0">h<animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.452131800832746s" fill="freeze"/></tspan><tspan opacity="0">e<animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.492510420069682s" fill="freeze"/></tspan><tspan opacity="0"> <animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.550324338072017s" fill="freeze"/></tspan><tspan opacity="0">s<animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.593854812582279s" fill="freeze"/></tspan><tspan opacity="0">i<animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.643582674494622s" fill="freeze"/></tspan><tspan opacity="0">t<animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.691714537232147s" fill="freeze"/></tspan><tspan opacity="0">e<animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.750775067077562s" fill="freeze"/></tspan><tspan opacity="0">!<animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.79151839866735s" fill="freeze"/></tspan><tspan opacity="0">&quot;<animate attributeName="opacity" values="0;1" dur="0.03s" begin="5.852526844095682s" fill="freeze"/></tspan>
  </text>
  <text x="26" y="174.79999999999998" class="terminal-success" opacity="0">
    Git command executed
    <animate attributeName="opacity" 
             values="0;1" 
             dur="0.1s" 
             begin="6.4s" 
             fill="freeze"/>
  </text>
  
  <!-- Enhanced cursor with professional glow effect -->
  
  <rect x="42.8" y="200.39999999999998" width="2" height="16" 
        class="terminal-cursor cursor-blink" filter="url(#modernGlow)" rx="1"/>
  
  
  
  <!-- Professional scan lines overlay for retro-modern feel -->
  <rect x="0" y="0" width="800" height="400" fill="url(#scanlines)" rx="12" ry="12" opacity="0.6"/>
  
  
  <!-- Subtle inner border for depth -->
  <rect x="0.5" y="0.5" width="799" height="399" rx="11.5" ry="11.5" 
        fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
</svg>