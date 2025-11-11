// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nckbthxreacjxaiokjkn.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ja2J0aHhyZWFjanhhaW9ramtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyMTkzMjksImV4cCI6MjA3Nzc5NTMyOX0.Ep5LFWJASC6tzidn3G5jsF9BULjf6JNq-1jFy3bReas";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
