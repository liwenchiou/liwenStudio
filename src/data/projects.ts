export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  coverImage: string;
  content: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    "id": "b0a7b317-9bda-40c6-b3a3-23f0f5b98c58",
    "slug": "milestone-studio",
    "title": "Milestone Studio",
    "description": "還在用長長的 LINE 訊息或雜亂的雲端硬碟分享珍貴回憶嗎？Milestone Studio 是一個專為「人生重大時刻」打造的 No-Code 網頁建置平台。我們將「硬邦邦的資料」轉化為「具備極致美感與高度互動」的專屬頁面，讓每一刻感動都能被優雅地保存與分享。",
    "category": "Development",
    "year": "2026",
    "coverImage": "/assets/navigator_preview.png",
    "content": "**標題：** Milestone Studio：不只是相簿，而是充滿溫度的數位空間\n\n**簡介：**\n還在用長長的 LINE 訊息或雜亂的雲端硬碟分享珍貴回憶嗎？Milestone Studio 是一個專為「人生重大時刻」打造的 No-Code 網頁建置平台。我們將「硬邦邦的資料」轉化為「具備極致美感與高度互動」的專屬頁面，讓每一刻感動都能被優雅地保存與分享。\n\n**詳情：**\n\n- 🎨 **設計師般的直覺編輯**：透過強大的拖拽功能與預設模組，任何人都能輕鬆排版出 Apple 級別的網頁質感。\n- 💬 **超越距離的互動感**：內建「即時祝福牆」與「AI 演變投票」，讓親友不只是看照片，更能參與其中。\n- ⚡ **即時同步，永久典藏**：由 Supabase 驅動的實時技術，不論身在哪裡，點開連結就能感受零時差的喜悅。\n\n---",
    "tags": [
      "React",
      "Tailwind"
    ]
  },
  {
    "id": "50efca1c-aa25-4cbf-b6b0-d7a8a12ace24",
    "slug": "liwen2026-12weekreport",
    "title": "2026 成長紀實",
    "description": "基於十二週計畫系統的自我成長日誌，透過數據與筆記記錄 2026 年的進化軌跡。",
    "category": "Development",
    "year": "2026",
    "coverImage": "/assets/growth_report.png",
    "content": "",
    "tags": []
  },
  {
    "id": "55672dae-b4d1-484b-9afe-115ef9dc3c77",
    "slug": "gridos",
    "title": "Gridos 螢跡",
    "description": "以視覺化回饋為核心的習慣追蹤應用，靈感源自 GitHub 貢獻圖。採用玻璃擬態 UI 設計，將成長足跡轉化為直觀的熱力圖與連續紀錄。",
    "category": "Development",
    "year": "2026",
    "coverImage": "/assets/gridos_preview.png",
    "content": "# Gridos 螢跡\n\n> **「我們重複執行的行為造就了我們。因此，卓越不是一個行為，而是一個習慣。」**\n>\n> **螢跡 Gridos**：由每一道微光，記錄成長的軌跡。\n\n---\n\n## 📖 專案簡介 (Introduction)\n\n**Gridos** (Grid + OS) 是一個專注於視覺化回饋的習慣追蹤應用程式。\n\n設計靈感源自於 GitHub 的貢獻圖 (Contribution Graph)，我們深信 **「可視化的進步」** 是維持自律最強大的動力。透過直觀的熱力圖與互動式介面，Gridos 將枯燥的打卡轉化為富有成就感的視覺體驗，協助使用者建立並維持長期的正面習慣。\n\n### 🚀 要解決的問題 (Problem Solved)\n\n建立與維持新習慣往往面臨以下挑戰：\n1. **缺乏即時回饋**：每天的努力容易被遺忘，難以感受到長期積累的價值。\n2. **動力難以維持**：缺乏明確的進度指標，容易在幾天後放棄。\n3. **介面繁瑣**：市面上的工具往往過於複雜，反而增加了執行的心理負擔。\n\n**Gridos 透過以下方式解決這些痛點：**\n- **熱力圖回顧 (History Heatmap)**：一目瞭然地看見過去每一天的努力軌跡，填滿格子的過程本身就是一種獎勵。\n- **連續紀錄 (Streak Tracking)**：透過連續天數的統計，激發使用者「不想中斷紀錄」的心理動力。\n- **極致的 UI/UX**：採用深色玻璃擬態 (Glassmorphism) 設計與流暢的微動畫 (Micro-interactions)，讓每一次操作都充滿質感與愉悅。\n- **本地端資料保存**：資料安全地儲存在瀏覽器 LocalStorage，無需註冊即可立即使用。\n\n---\n\n## 🛠️ 使用技術 (Tech Stack)\n\n本專案採用現代化的前端技術棧構建，不僅追求效能，更注重開發體驗與程式碼品質：\n\n- **核心框架**: [React 19](https://react.dev/)\n- **建置工具**: [Vite](https://vitejs.dev/) - 極速的開發服務器與打包工具\n- **程式語言**: [TypeScript](https://www.typescriptlang.org/) & JavaScript (ES6+)\n- **樣式系統**: [Tailwind CSS v4](https://tailwindcss.com/) - 採用最新的 Utility-first CSS 框架\n- **動畫互動**: [Framer Motion](https://www.framer.com/motion/) - 製作流暢的佈局轉換與進出場動畫\n- **圖示庫**: [Lucide React](https://lucide.dev/) - 輕量且風格統一的 SVG 圖示\n- **部署**: [GitHub Pages](https://pages.github.com/)\n\n---\n\n## 💻 使用方式 (Getting Started)\n\n您可以將此專案 Clone 到本地端進行開發或體驗。\n\n### 1. 安裝 (Installation)\n\n確認您的環境已安裝 [Node.js](https://nodejs.org/) (建議 v18+)。\n\n```bash\n# Clone 專案\ngit clone https://github.com/YOUR_USERNAME/gridos.git\n\n# 進入目錄\ncd gridos\n\n# 安裝依賴套件\nnpm install\n```\n\n### 2. 開發模式 (Development)\n\n啟動本地開發伺服器：\n\n```bash\nnpm run dev\n```\n啟動後，瀏覽器通常會自動開啟 `http://localhost:5173`。\n\n### 3. 建置與部署 (Build & Deploy)\n\n若您想將專案部署至 GitHub Pages：\n\n```bash\n# 建置生產版本\nnpm run build\n\n# 部署至 GitHub Pages (需先設定好 repo url)\nnpm run deploy\n```\n\n> **注意**：本專案已配置 `gh-pages` 套件與 GitHub Action 兼容的設定。在部署前，請確保 `vite.config.js` 中的 `base` 路徑與您的 Repository 名稱相符。\n\n---\n\n## 📂 專案結構 (Project Structure)\n\n```text\ngridos/\n├── public/              # 靜態資源\n├── src/\n│   ├── assets/          # 樣式與圖片資源\n│   ├── App.tsx          # 主應用程式邏輯 (State Management, UI Layout)\n│   ├── main.jsx         # 應用程式進入點\n│   └── ...\n├── index.html           # HTML 模板\n├── package.json         # 專案依賴定義\n├── tailwind.config.js   # Tailwind 設定 (v4 可能直接整合於 CSS)\n└── vite.config.js       # Vite 設定 (包含 Base URL 設定)\n```\n\n---\n\n## ✨ 主要功能特點 (Features)\n\n- **自訂習慣**：支援自訂習慣名稱、目標次數與專屬顏色標籤。\n- **一鍵打卡**：直覺的卡片式介面，點擊即可完成打卡，支援長按或多次點擊累計。\n- **進度可視化**：即時顯示今日完成率、剩餘次數與進度條。\n- **歷史熱力圖**：展開式的詳細月曆視圖，檢視每個習慣的長期執行狀況。\n- **每日格言**：隨機顯示激勵人心的名言，為每一天注入正能量。\n- **永久習慣保存 (Persistent Habits)**：自訂的習慣項目會永久保存於本地端，無需每日重複建立。每天打開 App，您的習慣清單都會自動準備好。\n- **每日進度重置 (Daily Reset)**：系統會根據日期自動判斷，在跨日後自動將所有習慣的「今日完成次數」歸零，讓您迎接新的一天挑戰，而歷史紀錄則會被完整保留。\n\n---\n\nMade with ❤️ by Gridos Team.\n",
    "tags": [
      "React"
    ]
  },
  {
    "id": "6d779a6f-a9f8-4609-96bc-8f585deb7e35",
    "slug": "verified-security-report-6d779",
    "title": "Verified Security Report",
    "description": "企業級雙重核實資安通報技能包，整合 165 防騙網與事實查核中心數據，自動生成跨部門防詐騙指南。",
    "category": "Development",
    "year": "2026",
    "coverImage": "/assets/og-image.png",
    "content": "# 🛡️ Verified-Security-Report 技能包\n\n<!-- Branch Protection Test -->\n<!-- Verified Protection Test 2 -->\n\n這是專為公司內部設計的「雙重核實資安通報」技能包。它能協助您每月產出經過事實查核（165防騙網、事實查核中心）證實的資安與防詐騙通報，並自動套用適合同仁閱讀的白話文模板。\n\n## 📦 資料夾結構\n\n- **📜 SKILL.md**：技能主說明文件，定義了執行流程。\n- **📂 workflows/**：包含資安報告產出 (`security-report.md`) 與事實查核 (`fact-check.md`) 的指令邏輯。\n- **📂 templates/**：存放資安通報的 Markdown 範本，可依公司需求自行調整。\n- **📂 output/**：所有產出的正式通報檔案會存放於此。\n\n## 🚀 如何開始使用？\n\n1. 請將整個 `verified-security-report` 資料夾複製到您專案目錄下的 `.agent/skills/` 資料夾中。\n2. 對 AI 助手下達指令即可開始：\n   - 「**產生資安通報**」：啟動全自動兩階段流程（產出 + 深度查核）。\n   - 「**事實查核 [訊息內容]**」：針對特定可疑訊息進行真偽鑑定。\n\n## ✨ 特色\n\n- **自動化情資**：自動搜尋本月最新 165 與事實查核中心案例。\n- **雙重保險**：所有案例產出後都會自動進行二次驗證，確保資訊 100% 正確。\n- **在地化內容**：預設採用適合 45 歲以上同仁閱讀的親民白話口吻。\n\n## ⚙️ 客製化\n\n您可以修改 `templates\\資安通報範例.md` 來更換公司名稱標誌或調整宣導原則。\n",
    "tags": [
      "AI Agent"
    ]
  },
  {
    "id": "14cf4d2e-d501-4b9c-a3f7-516024bc6169",
    "slug": "git-practice-tracker",
    "title": "Git 練功房",
    "description": "透過 GitHub API 深度分析 Commit 歷史，自動計算開發練習的投入時長與學習進度。",
    "category": "Development",
    "year": "2026",
    "coverImage": "/assets/git_tracker.png",
    "content": "# 📖 Git 練功房 (Git Practice Tracker) 使用說明 🎯\nDEMO: https://liwenchiou.github.io/git-practice-tracker/\n## 應用程式目的\n本工具旨在透過分析您 GitHub 專案中特定分支的 Commit 歷史，自動計算您在各項課程練習上所投入的總時長，協助您追蹤學習進度和效率。\n\n---\n\n## 1. 核心工作流程約定：如何讓程式讀懂時間\n您的 Git 操作必須遵循以下 3 個規範，否則程式無法識別哪些分支要計算，以及計算的起點和終點。\n\n### 步驟 1: 分支命名規範 (篩選)\n只有符合此約定的分支會被程式追蹤和統計。  \n**約定模式：** 分支名稱必須以 `pra` 開頭（程式碼中設定）。\n\n範例：\n- ✅ `pra-week3-hooks`\n- ✅ `practice/redux-module`\n- ❌ `feature/login-fix` (會被忽略)\n\n### 步驟 2: Commit 標籤規範 (計時)\n您必須在練習的 **第一個** 和 **最後一個** Commit 中使用特定的標籤：\n\n| 標籤 | 時機 | 程式碼識別關鍵字 | 意義 |\n|------|------|-----------------|------|\n| START | 開始一個練習時的第一個 Commit | `START:` | 標記 **T_start** (起始時間) |\n| DONE  | 完成該練習時的最後一個 Commit | `DONE:`  | 標記 **T_end** (結束時間) |\n\n### 步驟 3: Git 實際操作範例\n開始一個新練習的標準流程如下：\n\n```bash\n# 切換新分支\ngit checkout -b pra-new-feature\n\n# 立即標記開始\ngit commit --allow-empty -m \"START: 開始實作新的自定義 Hook\"\n\n# (中間正常練習並提交...)\n\n# 最後標記結束\ngit commit -m \"DONE: 所有功能測試通過，練習完成\"\ngit push origin pra-new-feature\n```\n---\n## 2. 應用程式操作指南\n### 2.1 設定與追蹤\n- 輸入 GitHub Username： 在「GitHub Username」欄位輸入您的帳號。\n- 點擊「驗證」： 系統會檢查帳號是否正確，驗證成功後才會顯示您的使用者頭像以及專案列表。\n- 選擇專案： 從下拉選單中選擇您要追蹤的包含練習分支的專案。\n- 點擊「開始追蹤」：\n    - 若尚未驗證，系統會跳出「請先驗證」的提示訊息。\n    - 驗證成功後，系統將執行以下操作：\n        - 獲取該專案所有分支\n        - 篩選出所有以 pra 開頭的分支\n        - 並行查詢每個分支的 Commit 歷史，尋找 START: 和 DONE: 標籤\n        - 計算每次練習的開始、結束、完成時間\n        - 顯示最佳成績\n\n### 2.2 結果解讀\n在「追蹤結果」區塊，您將看到一份詳盡的表格：\n- 練習分支： 符合 pra 命名約定的分支名稱\n- 開始時間： 該分支中最舊的 START: Commit 時間\n- 結束時間： 該分支中最新的 DONE: Commit 時間\n- 完成時長： 兩個時間戳記之間的總經過時長（格式：HH 小時 MM 分鐘）\n- 最佳成績： 所有練習中耗時最短的一次結果\n\n<a href=\"https://ibb.co/BKPKMKnN\"><img src=\"https://i.ibb.co/wrLrmrcs/image.png\" alt=\"image\" border=\"0\"></a>\n",
    "tags": [
      "React",
      "GitHub API"
    ]
  },
  {
    "id": "5c6a9d0a-0c77-4044-b048-9fb188ba6544",
    "slug": "tailwind-lab-pro-5c6a9",
    "title": "Tailwind Lab Pro",
    "description": "Tailwind CSS 可視化樣式配置工具，支援多狀態（Hover/Active）配置與智慧去重代碼輸出，大幅提升前端開發效率與設計質感。",
    "category": "Development",
    "year": "2026",
    "coverImage": "/assets/tailwind_lab.png",
    "content": "",
    "tags": [
      "React",
      "Tailwind"
    ]
  }
];
