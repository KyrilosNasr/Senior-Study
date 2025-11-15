#!/bin/bash

# GitHub Account Setup Script
# This script helps you configure Git to use a different GitHub account

echo "=== GitHub Account Configuration ==="
echo ""
echo "Current configuration:"
echo "  Name: $(git config user.name)"
echo "  Email: $(git config user.email)"
echo "  Remote: $(git remote get-url origin 2>/dev/null || echo 'Not set')"
echo ""

# Prompt for new account details
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter your GitHub email: " GITHUB_EMAIL
read -p "Do you want to configure for this repo only? (y/n) [y]: " REPO_ONLY
REPO_ONLY=${REPO_ONLY:-y}

if [ "$REPO_ONLY" = "y" ]; then
    echo "Configuring for this repository only..."
    git config user.name "$GITHUB_USERNAME"
    git config user.email "$GITHUB_EMAIL"
else
    echo "Configuring globally..."
    git config --global user.name "$GITHUB_USERNAME"
    git config --global user.email "$GITHUB_EMAIL"
fi

echo ""
echo "Updated configuration:"
echo "  Name: $(git config user.name)"
echo "  Email: $(git config user.email)"
echo ""

# Ask about remote URL
read -p "Do you want to update the remote URL to your fork? (y/n) [n]: " UPDATE_REMOTE
UPDATE_REMOTE=${UPDATE_REMOTE:-n}

if [ "$UPDATE_REMOTE" = "y" ]; then
    read -p "Enter your GitHub username for the fork: " FORK_USERNAME
    read -p "Use SSH? (y/n) [n]: " USE_SSH
    USE_SSH=${USE_SSH:-n}
    
    if [ "$USE_SSH" = "y" ]; then
        git remote set-url origin "git@github.com:$FORK_USERNAME/Senior-Study.git"
        echo "Remote updated to SSH: git@github.com:$FORK_USERNAME/Senior-Study.git"
    else
        git remote set-url origin "https://github.com/$FORK_USERNAME/Senior-Study.git"
        echo "Remote updated to HTTPS: https://github.com/$FORK_USERNAME/Senior-Study.git"
    fi
fi

echo ""
echo "=== Next Steps ==="
echo ""
echo "For HTTPS authentication:"
echo "  1. Go to: https://github.com/settings/tokens"
echo "  2. Generate a new token (classic) with 'repo' scope"
echo "  3. Use your GitHub username and the token as password when pushing"
echo ""
echo "For SSH authentication (recommended):"
echo "  1. Generate SSH key: ssh-keygen -t ed25519 -C \"$GITHUB_EMAIL\""
echo "  2. Add public key to GitHub: https://github.com/settings/keys"
echo "  3. Update remote: git remote set-url origin git@github.com:$GITHUB_USERNAME/Senior-Study.git"
echo ""
echo "Done! You can now try: git push"

