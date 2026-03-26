import React, { useState } from 'react';
import axios from 'axios';
import { UserPlus, Mail, Lock, Loader2, AlertCircle, CheckCircle2, User, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await axios.post('http://127.0.0.1:8000/register', {
                username,
                password,
                email
            });
            setStatus({ type: 'success', message: 'Registration successful! You can now log in.' });
            
            setTimeout(() => {
                window.location.href = '/login';
            }, 2000);
        } catch (error) {
            setStatus({ 
                type: 'error', 
                message: error.response?.data?.detail || 'Registration failed. Please try again.' 
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#1a3edb] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background elements to match home */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"></div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md"
            >
                <div className="bg-white rounded-[40px] p-10 shadow-2xl relative overflow-hidden">
                    <Link to="/" className="inline-flex items-center text-[#1a3edb] font-semibold mb-8 hover:-translate-x-1 transition-transform group">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        <span>Back to Home</span>
                    </Link>

                    <div className="mb-8">
                        <h1 className="text-4xl font-black text-[#1a3edb] mb-2 uppercase tracking-tighter">JOIN US</h1>
                        <p className="text-slate-500 font-medium text-sm">Create your secure member account</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700 ml-1">Username</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1a3edb] transition-colors">
                                    <User size={18} />
                                </div>
                                <input 
                                    type="text" 
                                    placeholder="Choose username" 
                                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#1a3edb] focus:ring-0 text-slate-800 placeholder-slate-400 transition-all font-medium text-sm"
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1a3edb] transition-colors">
                                    <Mail size={18} />
                                </div>
                                <input 
                                    type="email" 
                                    placeholder="you@email.com" 
                                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#1a3edb] focus:ring-0 text-slate-800 placeholder-slate-400 transition-all font-medium text-sm"
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1a3edb] transition-colors">
                                    <Lock size={18} />
                                </div>
                                <input 
                                    type="password" 
                                    placeholder="••••••••" 
                                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#1a3edb] focus:ring-0 text-slate-800 placeholder-slate-400 transition-all font-medium text-sm"
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isLoading} 
                            className="w-full py-4.5 bg-[#1a3edb] hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98] uppercase tracking-wider mt-4"
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin mx-auto" size={24} />
                            ) : (
                                'Complete Registration'
                            )}
                        </button>
                    </form>

                    <AnimatePresence>
                        {status.message && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className={`mt-6 p-4 rounded-2xl flex items-center space-x-3 ${
                                    status.type === 'success' 
                                    ? 'bg-emerald-50 text-emerald-600' 
                                    : 'bg-rose-50 text-rose-600'
                                }`}
                            >
                                {status.type === 'success' ? (
                                    <CheckCircle2 className="flex-shrink-0" size={18} />
                                ) : (
                                    <AlertCircle className="flex-shrink-0" size={18} />
                                )}
                                <span className="text-sm font-bold leading-tight">{status.message}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-sm font-medium">
                            Already a member? 
                            <Link to="/login" className="ml-2 text-[#1a3edb] font-black hover:underline underline-offset-4">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;
