/**
 * AI Content Automation Script
 * 
 * This script automates generating SEO-friendly titles, descriptions, and pros/cons
 * for new tools added to the data.json file without full details.
 * 
 * Usage Instructions:
 * 1. Ensure you have Node.js installed.
 * 2. Run: npm install dotenv node-fetch
 * 3. Get a Google Gemini API Key and create a .env file with GEMINI_API_KEY=your_key
 * 4. Run this script: node scripts/generate-content.js
 */

const fs = require('fs');
const path = require('path');
// const fetch = require('node-fetch'); // uncomment when running in real environment
// require('dotenv').config(); // uncomment when running in real environment

const TOOLS_FILE_PATH = path.join(__dirname, '../src/data/tools.json');

// Mock function for demonstrating the process. 
// In a real scenario, this would call the Gemini API.
async function generateToolDataWithAI(toolName, category) {
  console.log(`[AI] Generating content for ${toolName} in category ${category}...`);
  
  // Real implementation would look something like this:
  /*
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: `You are an SEO expert. Generate JSON data for an AI tool called "${toolName}" in the "${category}" category. 
          Return ONLY valid JSON with the following keys:
          - title (catchy, SEO optimized, max 60 chars)
          - description (SEO optimized, benefits focused, max 150 chars)
          - pros (array of 3 short strings)
          - cons (array of 2 short strings)`
        }]
      }]
    })
  });
  
  const data = await response.json();
  const textResponse = data.candidates[0].content.parts[0].text;
  // parse the JSON response here...
  */
  
  // Returning mock data for demonstration
  return {
    title: `${toolName}: The Ultimate AI Solution`,
    description: `Automate your ${category.toLowerCase()} workflow with ${toolName}. The best AI tool for beginners and small businesses looking to scale faster.`,
    pros: ["Easy to use interface", "Affordable pricing", "Great customer support"],
    cons: ["Limited integrations initially", "Requires internet connection"]
  };
}

async function main() {
  console.log("Checking tools.json for incomplete entries...");
  
  try {
    const rawData = fs.readFileSync(TOOLS_FILE_PATH, 'utf8');
    const tools = JSON.parse(rawData);
    let updatedCount = 0;
    
    for (let i = 0; i < tools.length; i++) {
      const tool = tools[i];
      
      // Check if tool needs AI generation (missing description or title)
      if (!tool.description || !tool.title || tool.description === "" || tool.title === "") {
        console.log(`Processing incomplete tool: ${tool.name}`);
        
        try {
          const aiGeneratedData = await generateToolDataWithAI(tool.name, tool.category);
          
          // Update the tool object
          tools[i] = {
            ...tool,
            title: aiGeneratedData.title,
            description: aiGeneratedData.description,
            pros: tool.pros && tool.pros.length > 0 ? tool.pros : aiGeneratedData.pros,
            cons: tool.cons && tool.cons.length > 0 ? tool.cons : aiGeneratedData.cons,
            rating: tool.rating || 4.5, // default rating if missing
            isTop3: tool.isTop3 || false
          };
          
          updatedCount++;
        } catch (error) {
          console.error(`Failed to generate data for ${tool.name}:`, error);
        }
      }
    }
    
    if (updatedCount > 0) {
      fs.writeFileSync(TOOLS_FILE_PATH, JSON.stringify(tools, null, 2), 'utf8');
      console.log(`Successfully updated ${updatedCount} tools with AI generated content!`);
    } else {
      console.log("All tools are fully populated. Nothing to do.");
    }
    
  } catch (err) {
    console.error("Error reading or writing tools.json:", err);
  }
}

main();
