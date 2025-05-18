# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/23a1dca1-96f3-4d94-b37c-f6526a7a3de1

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/23a1dca1-96f3-4d94-b37c-f6526a7a3de1) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/23a1dca1-96f3-4d94-b37c-f6526a7a3de1) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## API Integration

This application is integrated with the chest X-ray classifier API endpoint at:
```
https://mokshayani-ai--chestxray-classifier-api.modal.run
```

### API Endpoints

1. `/predict` - POST request to analyze a chest X-ray image
   - Accepts form data with a `file` field containing the image
   - Returns predictions for various lung diseases

2. `/health` - GET request to check API health status
   - Returns a 200 OK response with `{"status": "healthy"}` if the API is operational

### Response Format

The API returns predictions in the following format:

```json
{
  "predictions": [
    {
      "class_name": "Pneumonia",
      "confidence": 0.85
    },
    {
      "class_name": "Infiltration",
      "confidence": 0.65
    }
  ]
}
```

Each prediction includes:
- `class_name`: The name of the detected disease
- `confidence`: A confidence score between 0 and 1
