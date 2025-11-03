import { NextRequest, NextResponse } from 'next/server';

// Для Docker используем host.docker.internal, для локальной разработки - localhost
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'http://bookapp:5008' 
  : 'http://localhost:5008';

export async function GET(request: NextRequest) {
  const API_URL = `${API_BASE_URL}/api/Books`;
  
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const API_URL = `${API_BASE_URL}/api/Books`;
  
  try {
    const body = await request.json();
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}