export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string
          avatar_url: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          full_name: string
          avatar_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string
          avatar_url?: string | null
        }
      }
      memories: {
        Row: {
          id: string
          created_at: string
          user_id: string
          title: string
          content: string
          type: 'text' | 'audio' | 'video'
          media_url: string | null
          tags: string[]
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          title: string
          content: string
          type: 'text' | 'audio' | 'video'
          media_url?: string | null
          tags?: string[]
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          title?: string
          content?: string
          type?: 'text' | 'audio' | 'video'
          media_url?: string | null
          tags?: string[]
        }
      }
      recipients: {
        Row: {
          id: string
          created_at: string
          user_id: string
          email: string
          full_name: string
          relationship: string
          status: 'pending' | 'active' | 'inactive'
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          email: string
          full_name: string
          relationship: string
          status?: 'pending' | 'active' | 'inactive'
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          email?: string
          full_name?: string
          relationship?: string
          status?: 'pending' | 'active' | 'inactive'
        }
      }
    }
  }
}