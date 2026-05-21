export default async function handler(req, res) {
    // 1. Get your master key safely from Vercel's environment variables
    const masterKey = process.env.MASTER_KEY;
  
    if (!masterKey) {
      return res.status(500).json({ error: "Server error: Master key not configured." });
    }
  
    try {
      // 2. Perform the sensitive action HERE on the server using the key
      // Replace the URL below with the actual service you are connecting to
      const response = await fetch('vercel-idzzr3jhz-mrhairybusiness-cryptos-projects.vercel.app', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${masterKey}`,
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
  
      // 3. Return ONLY the safe data results back to your Electron App
      return res.status(200).json(data);
  
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch data from secure database." });
    }
  }
  
