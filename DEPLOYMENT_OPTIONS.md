# Cryovault Deployment Options

## ⚠️ Important: Static Export Limitations

Your website uses features that **cannot** be statically exported:
- ✗ API Routes (`/api/chat` for chatbot)
- ✗ Server-side authentication
- ✗ Dynamic blog routes without pre-generation
- ✗ Form submissions to Supabase (needs server-side)

## Recommended Deployment Options

### 🌟 Option 1: Vercel (RECOMMENDED)
**Best for your use case - supports all features**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**Pros:**
- ✅ All features work (chatbot, API routes, SSR)
- ✅ Automatic HTTPS and CDN
- ✅ Easy environment variable management
- ✅ Free tier available
- ✅ Automatic deployments from Git
- ✅ Built specifically for Next.js

**Setup:**
1. Create account at vercel.com
2. Connect your GitHub repository
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

---

### Option 2: Netlify
**Good alternative with similar features**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Pros:**
- ✅ Supports Next.js with serverless functions
- ✅ Good performance
- ✅ Free tier available

---

### Option 3: Traditional Hosting (VPS/Shared Hosting)
**For static files only - LIMITED FEATURES**

```bash
# Build static files
npm run build

# Files will be in 'out' folder
# Upload 'out' folder to your hosting
```

**⚠️ Limitations:**
- ✗ Chatbot won't work (no API routes)
- ✗ Server-side features disabled
- ✗ Form submissions need external service
- ✗ Authentication limited

**What will work:**
- ✅ Static pages (homepage, about, contact page UI)
- ✅ Images and styling
- ✅ Client-side navigation

---

## Environment Variables Needed

For any deployment option, set these:

```env
NEXT_PUBLIC_SUPABASE_URL=https://zypsvvzvttwcruvpkgdj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
GEMINI_API_KEY=AIzaSyDvvXrazX0BCjtpG8gCmqOcCeVpBIgWtVY
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YVTVD468YV
```

---

## Quick Start: Vercel Deployment (5 minutes)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - Add environment variables
   - Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

---

## For Static Export (Limited Features)

If you still want to try static export:

```bash
npm run export
```

This will create an `out` folder with static files, but:
- Chatbot won't work
- API routes won't work
- Some dynamic features will be disabled

---

## Recommendation

**Use Vercel** - It's free, easy, and supports all your features including:
- ✅ Chatbot with Gemini API
- ✅ Supabase integration
- ✅ Contact forms
- ✅ Admin dashboard
- ✅ Authentication
- ✅ Blog system

Would you like help setting up Vercel deployment?
