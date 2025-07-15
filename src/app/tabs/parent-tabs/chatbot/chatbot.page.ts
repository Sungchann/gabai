import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as showdown from 'showdown'; // we'll use this markdown-to-html converter

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
  standalone: false,
})
export class ChatbotPage implements OnInit {
  loadingMessageIndex: number | null = null;
  messages: { from: 'user' | 'coach', text: string }[] = [];
  inputMessage = '';
  userId = 2; // or get this dynamically from your auth context
  private markdownConverter: showdown.Converter;


  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.markdownConverter = new showdown.Converter({
      simpleLineBreaks: true,
      tables: true,
      strikethrough: true,
      emoji: true
    });
  }


  formatMessage(msg: { from: string; text: string }): SafeHtml {
    const html = this.markdownConverter.makeHtml(msg.text);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

  sendMessage() {
      const trimmedMessage = this.inputMessage.trim();
      if (!trimmedMessage) return;

      // Push user message
      this.messages.push({ from: 'user', text: trimmedMessage });

      const payload = {
        user_id: this.userId.toString(),
        message: trimmedMessage,
      };

      this.inputMessage = ''; // Clear input

      // Push temporary loading message from coach
      this.messages.push({ from: 'coach', text: '...' });
      this.loadingMessageIndex = this.messages.length - 1;

      this.http.post<{ response: string }>('https://3s5q2zvk-8000.asse.devtunnels.ms/api/chat/', payload).subscribe({
        next: (res) => {
          if (this.loadingMessageIndex !== null) {
            // Replace loading message with the actual response
            this.messages[this.loadingMessageIndex] = { from: 'coach', text: res.response };
            this.loadingMessageIndex = null;
          }
        },
        error: (err) => {
          console.error('Chatbot error:', err);

          if (this.loadingMessageIndex !== null) {
            this.messages[this.loadingMessageIndex] = {
              from: 'coach',
              text: `I'm sorry, I'm having trouble processing your request right now. Please try again shortly.`,
            };
            this.loadingMessageIndex = null;
          }
        },
      });
  }
}