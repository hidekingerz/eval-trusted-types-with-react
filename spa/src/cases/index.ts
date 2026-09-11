import { reactCases } from './react';
import { domCases } from './dom';
import type { Case } from './types';

export const allCases: Case[] = [...reactCases, ...domCases];
export * from './types';
