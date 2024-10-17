import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="text-center animate-fade-up">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <Card className="max-w-md mx-auto dark:bg-zinc-900 dark:border-zinc-700">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription className="dark:text-zinc-400">Feel free to reach out for collaborations or just a friendly hello</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start border-zinc-200 dark:border-zinc-700">
            <Mail className="mr-2 h-4 w-4" />
            <a href="mailto:bezicalboy@gmail.com" className="hover:underline">
              bezicalboy@gmail.com
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-start border-zinc-200 dark:border-zinc-700">
            <Linkedin className="mr-2 h-4 w-4" />
            <a href="https://id.linkedin.com/in/bezicalboy" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/bezicalboy
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
