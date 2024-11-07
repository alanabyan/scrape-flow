'use server';

import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { createWorkflowSchema, createWorkflowSchemaType } from '@/schema/workflow';
import { WorkflowStatus } from '@/types/workflow';
import { auth } from '@clerk/nextjs/server';

export async function CreateWorkFlow(form: createWorkflowSchemaType) {
    const { success, data } = createWorkflowSchema.safeParse(form);
    if (!success) {
        throw new Error('invalid form data');
    }
    const { userId } = auth();

    if (!userId) {
        throw new Error('unauthenticated');
    }

    const result = await prisma.workflow.create({
        data: {
            userId,
            status: WorkflowStatus.DRAFT,
            definition: 'TODO',
            ...data
        }
    });

    if (!result) {
        throw new Error('Failed to create workflow');
    }

    redirect(`/workflow/editor/${result.id}`);
}
