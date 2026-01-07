# Cryovault Website - Deployment Guide

## ✅ Build Status: READY FOR DEPLOYMENT

Your website is production-ready with all features working:
- ✅ AI Chatbot with Gemini API
- ✅ Supabase backend integration
- ✅ Contact forms and appointment booking
- ✅ Admin dashboard and blog management
- ✅ Authentication system
- ✅ Google Analytics
- ✅ SEO optimization
- ✅ Mobile responsive design

---

## 🚨 IMPORTANT: Cannot Use Static Export

Your website **CANNOT** be exported as static HTML because it requires:
- **API Routes** (chatbot with Gemini AI)
- **Server-side rendering** (authentication, forms)
- **Dynamic routes** (blogs, admin pages)
- **Database connections** (Supabase)

**You MUST deploy to a platform that supports Next.js server features.**

---

## 🌟 RECOMMENDED: Deploy to Vercel (5 Minutes Setup)

Vercel is built by the creators of Next.js and is the best option for your website.

### Why Vercel?
- ✅ **FREE** tier (perfect for your needs)
- ✅ All features work (chatbot, API, forms, auth)
- ✅ Automatic HTTPS and CDN
- ✅ Easy environment variable management
- ✅ Automatic deployments from Git
- ✅ Built specifically for Next.js

### Quick Deployment Steps:

#### Option 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "Import Project"
   - Select your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Add Environment Variables:**
   In Vercel dashboard, go to Settings → Environment Variables and add:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://zypsvvzvttwcruvpkgdj.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   GEMINI_API_KEY=AIzaSyDvvXrazX0BCjtpG8gCmqOcCeVpBIgWtVY
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YVTVD468YV
   ```

4. **Redeploy** after adding environment variables

5. **Done!** Your site will be live at `your-project.vercel.app`

#### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

---

## Alternative: Deploy to Netlify

Netlify also supports Next.js with serverless functions.

### Steps:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

4. **Add Environment Variables** in Netlify dashboard

---

## For Traditional Hosting (VPS/Cloud Server)

If you have a VPS or cloud server (AWS, DigitalOcean, etc.):

### Requirements:
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx or Apache for reverse proxy

### Steps:

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the server:**
   ```bash
   npm start
   ```
   This runs on port 3000 by default.

3. **Use PM2 for production:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "cryovault" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx reverse proxy:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Set environment variables:**
   Create `.env.local` file with all required variables

---

## Environment Variables Required

Make sure these are set in your deployment platform:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://zypsvvzvttwcruvpkgdj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Gemini AI (Server-side only)
GEMINI_API_KEY=AIzaSyDvvXrazX0BCjtpG8gCmqOcCeVpBIgWtVY

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YVTVD468YV
```

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] Appointment booking works
- [ ] Chatbot responds (test with quick questions)
- [ ] Admin login works
- [ ] Blog pages load
- [ ] Google Analytics tracking active
- [ ] Mobile view works properly
- [ ] HTTPS is enabled
- [ ] Custom domain configured (if applicable)

---

## Custom Domain Setup

### On Vercel:
1. Go to Project Settings → Domains
2. Add your domain (e.g., cryovault.in)
3. Update DNS records as instructed
4. Wait for DNS propagation (5-60 minutes)

### DNS Records Example:
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Troubleshooting

### Chatbot not working?
- Check if `GEMINI_API_KEY` is set in environment variables
- Verify API key is valid
- Check browser console for errors

### Forms not submitting?
- Verify Supabase credentials are correct
- Check Supabase dashboard for connection issues
- Ensure RLS policies are configured

### Build fails?
- Run `npm run build` locally first
- Check for TypeScript errors
- Verify all dependencies are installed

---

## Support & Contact

- **Email**: info@cryovault.in
- **Phone**: 1800 1024 026
- **Deployment Issues**: Check Vercel/Netlify documentation

---

## Summary

**✅ RECOMMENDED PATH:**
1. Push code to GitHub
2. Deploy to Vercel (free)
3. Add environment variables
4. Configure custom domain
5. Done!

**Total Time: 5-10 minutes**

Your website will be live with all features working perfectly!
