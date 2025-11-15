# GitHub Authentication Setup

## ✅ Current Configuration
- **Git User**: SyscodeiaKerelos
- **Git Email**: Kerelos@syscodeia.ae
- **Remote**: https://github.com/KyrilosNasr/Senior-Study
- **Status**: You are a collaborator on this repository ✅

## 🔐 Authentication Steps

### Option 1: Personal Access Token (HTTPS) - Recommended

1. **Create a Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name it: `Senior-Study-Repo`
   - Select scopes: ✅ `repo` (Full control of private repositories)
   - Click "Generate token"
   - **Copy the token immediately** (you won't see it again!)

2. **Push to repository:**
   ```bash
   git push Senior-Study master
   ```
   
3. **When prompted for credentials:**
   - Username: `SyscodeiaKerelos`
   - Password: `paste-your-personal-access-token-here`

4. **The credentials will be saved in macOS Keychain**

### Option 2: SSH (More Secure)

1. **Generate SSH key:**
   ```bash
   ssh-keygen -t ed25519 -C "Kerelos@syscodeia.ae"
   ```
   - Press Enter to accept default location (`~/.ssh/id_ed25519`)
   - Set a passphrase (optional but recommended)

2. **Copy public key:**
   ```bash
   cat ~/.ssh/id_ed25519.pub | pbcopy
   ```

3. **Add to GitHub:**
   - Go to: https://github.com/settings/keys
   - Click "New SSH key"
   - Title: `Senior-Study-Mac`
   - Paste the key
   - Click "Add SSH key"

4. **Update remote to use SSH:**
   ```bash
   git remote set-url Senior-Study git@github.com:KyrilosNasr/Senior-Study.git
   ```

5. **Test connection:**
   ```bash
   ssh -T git@github.com
   ```
   You should see: `Hi SyscodeiaKerelos! You've successfully authenticated...`

6. **Push:**
   ```bash
   git push Senior-Study master
   ```

## 🚀 Quick Test

After setting up authentication, test with:
```bash
git push Senior-Study master
```

If successful, you'll see your changes pushed to the repository!

## 📝 Notes

- Your credentials are cached in macOS Keychain (for HTTPS) or SSH agent (for SSH)
- If you get permission errors, make sure you're using the correct GitHub account
- The remote name is `Senior-Study` (not `origin`)

