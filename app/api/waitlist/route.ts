import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, businessType } = body;

    // Validate input
    if (!name || !email || !phone || !businessType) {
      return NextResponse.json(
        { error: 'جميع الحقول مطلوبة / All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني غير صحيح / Invalid email address' },
        { status: 400 }
      );
    }

    // Phone validation (basic check)
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(phone) || phone.length < 8) {
      return NextResponse.json(
        { error: 'رقم الهاتف غير صحيح / Invalid phone number' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existingUser } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'هذا البريد الإلكتروني مسجل مسبقاً / This email is already registered' },
        { status: 409 }
      );
    }

    // Insert into database
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          name,
          email,
          phone,
          business_type: businessType,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'حدث خطأ أثناء التسجيل، حاول مرة أخرى / Registration error, please try again' },
        { status: 500 }
      );
    }

    // TODO: Send welcome email or SMS (optional - can be added later)
    // await sendWelcomeNotification(email, phone, name);

    return NextResponse.json(
      {
        success: true,
        message: 'تم التسجيل بنجاح / Successfully registered',
        data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم / Server error' },
      { status: 500 }
    );
  }
}
