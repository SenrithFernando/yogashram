import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-[60] w-14 h-14 bg-sage-500 text-white rounded-full shadow-lg hover:bg-sage-600 transition-colors flex items-center justify-center group"
                aria-label="Toggle chatbot"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <MessageCircle className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Tooltip */}
                {!isOpen && (
                    <div className="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-xs font-medium text-gray-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Have a question? Ask our AI
                    </div>
                )}
            </button>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 z-[60] w-[90vw] md:w-[400px] h-[70vh] max-h-[700px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
                    >
                        <div className="p-4 bg-sage-50 border-b border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-sage-500 flex items-center justify-center">
                                    <MessageCircle className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-bold text-gray-800 text-sm">Yogashram Assistant</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-gray-100 rounded-lg transition-colors text-gray-400"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 w-full h-full bg-white relative">
                            <iframe
                                src="https://www.chatbase.co/chatbot-iframe/T3ltOdqKXEAtiZK8UpH7w"
                                width="100%"
                                height="100%"
                                style={{ border: 'none', minHeight: '100%' }}
                                title="Chatbase Chatbot"
                            ></iframe>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
