"use client";

import React from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "react-i18next";
import { Mail, Lock, Loader2, FileText, MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { Typography } from "@/src/share-components/atoms/typography";
import { ControllerInput } from "@/src/share-components/molecules/inputs/controller-input";
import { ControllerSelect } from "@/src/share-components/molecules/inputs/controller-select";
import { useAuthStore } from "@/src/modules/auth/store/useAuthStore";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  role: z.string().min(1, { message: "Role is required" }),
  title: z.string().optional(),
  textmessage: z.string().optional(),
});

type LoginValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { login } = useAuthStore();
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const methods = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
      role: 'admin',
      title: '',
      textmessage: '',
    }
  });

  const onSubmit = async (data: LoginValues) => {
    setError(null);
    setIsLoading(true);
    try {
      const success = await login(data.username, data.password);
      if (success) {
        router.push('/dashboard');
      } else {
        setError(t('invalid_credentials') || 'Invalid username or password');
      }
    } catch (err) {
      setError(t('something_went_wrong') || 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-7">
        <ControllerSelect
          name="role"
          label={t('role') || 'Access Role'}
          placeholder="Select role"
          icon={ShieldCheck}
          options={[
            { label: 'Administrator', value: 'admin' },
            { label: 'Editor', value: 'editor' },
            { label: 'Viewer', value: 'viewer' },
          ]}
        />

        <ControllerInput
          name="title"
          label={t('title') || 'Title'}
          placeholder="Optional title"
          icon={FileText}
        />

        <ControllerInput
          name="username"
          label={t('username')}
          placeholder="admin"
          icon={Mail}
        />

        <ControllerInput
          name="password"
          label={t('password')}
          type="password"
          placeholder="admin"
          icon={Lock}
        />

        <ControllerInput
          name="textmessage"
          label={t('textmessage') || 'Text Message'}
          placeholder="Optional message"
          icon={MessageSquare}
        />

        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-bold text-center"
          >
            {error}
          </motion.div>
        )}

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full h-14 rounded-2xl font-black text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_10px_30px_rgba(31,16,142,0.2)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
        >
          {isLoading ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              <Typography variant="span" weight="bold">{t('logging_in')}</Typography>
            </>
          ) : (
            <Typography variant="span" weight="black">{t('login')}</Typography>
          )}
        </Button>
      </form>
    </FormProvider>
  );
};

