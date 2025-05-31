import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type Memory = Database['public']['Tables']['memories']['Row'];

export function useMemories(userId: string | null) {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) {
      setMemories([]);
      setLoading(false);
      return;
    }

    const fetchMemories = async () => {
      try {
        const { data, error } = await supabase
          .from('memories')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setMemories(data || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch memories'));
      } finally {
        setLoading(false);
      }
    };

    fetchMemories();
  }, [userId]);

  const addMemory = async (memory: Omit<Memory, 'id' | 'created_at'>) => {
    try {
      const { data, error } = await supabase
        .from('memories')
        .insert([memory])
        .select()
        .single();

      if (error) throw error;
      setMemories(prev => [data, ...prev]);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to add memory'));
      throw err;
    }
  };

  const updateMemory = async (id: string, updates: Partial<Memory>) => {
    try {
      const { data, error } = await supabase
        .from('memories')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setMemories(prev => prev.map(memory => memory.id === id ? data : memory));
      return data;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update memory'));
      throw err;
    }
  };

  const deleteMemory = async (id: string) => {
    try {
      const { error } = await supabase
        .from('memories')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setMemories(prev => prev.filter(memory => memory.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to delete memory'));
      throw err;
    }
  };

  return {
    memories,
    loading,
    error,
    addMemory,
    updateMemory,
    deleteMemory,
  };
}