"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../src/utils/db"));
async function main() {
    console.log('Seeding new bilingual lessons...');
    // Find or create a Computer Science category
    let category = await db_1.default.category.findFirst({ where: { name: 'Computer Science' } });
    if (!category) {
        category = await db_1.default.category.create({
            data: { name: 'Computer Science', description: 'Core CS subjects' }
        });
    }
    // Find or create a course
    let course = await db_1.default.course.findFirst({ where: { title: 'CS Fundamentals' } });
    if (!course) {
        course = await db_1.default.course.create({
            data: {
                title: 'CS Fundamentals',
                titleAr: 'أساسيات علوم الحاسب',
                description: 'Learn the core concepts of computer science.',
                descriptionAr: 'تعلم المفاهيم الأساسية لعلوم الحاسب.',
                categoryId: category.id
            }
        });
    }
    // Find or create a module
    let module = await db_1.default.module.findFirst({ where: { courseId: course.id } });
    if (!module) {
        module = await db_1.default.module.create({
            data: {
                courseId: course.id,
                title: 'Module 1: Introduction',
                titleAr: 'الوحدة 1: مقدمة',
                description: 'Getting started',
                descriptionAr: 'البداية',
                order: 1
            }
        });
    }
    const lessonsToSeed = [
        {
            title: 'Python Fundamentals',
            titleAr: 'أساسيات بايثون',
            desc: 'Learn variables, loops, and functions in Python.',
            descAr: 'تعلم المتغيرات، الحلقات، والدوال في بايثون.',
            contentEn: 'Python is a high-level programming language...',
            contentAr: 'بايثون هي لغة برمجة عالية المستوى...'
        },
        {
            title: 'Git and GitHub Fundamentals',
            titleAr: 'أساسيات Git و GitHub',
            desc: 'Version control basics.',
            descAr: 'أساسيات التحكم في الإصدارات.',
            contentEn: 'Git allows you to track changes...',
            contentAr: 'يسمح لك Git بتتبع التغييرات...'
        },
        {
            title: 'APIs and REST',
            titleAr: 'واجهات برمجة التطبيقات و REST',
            desc: 'Learn how services communicate.',
            descAr: 'تعلم كيف تتواصل الخدمات.',
            contentEn: 'An API is an Application Programming Interface...',
            contentAr: 'واجهة برمجة التطبيقات (API) هي واجهة...'
        },
        {
            title: 'Internet of Things (IoT)',
            titleAr: 'إنترنت الأشياء (IoT)',
            desc: 'Connecting devices to the internet.',
            descAr: 'ربط الأجهزة بالإنترنت.',
            contentEn: 'IoT refers to a network of physical devices...',
            contentAr: 'يشير إنترنت الأشياء إلى شبكة من الأجهزة المادية...'
        },
        {
            title: 'Cybersecurity Fundamentals',
            titleAr: 'أساسيات الأمن السيبراني',
            desc: 'Protecting systems and networks.',
            descAr: 'حماية الأنظمة والشبكات.',
            contentEn: 'Cybersecurity is the practice of protecting...',
            contentAr: 'الأمن السيبراني هو ممارسة حماية...'
        },
        {
            title: 'Introduction to AI and Machine Learning',
            titleAr: 'مقدمة في الذكاء الاصطناعي وتعلم الآلة',
            desc: 'Making computers smart.',
            descAr: 'جعل أجهزة الكمبيوتر ذكية.',
            contentEn: 'AI is the simulation of human intelligence...',
            contentAr: 'الذكاء الاصطناعي هو محاكاة الذكاء البشري...'
        }
    ];
    for (let i = 0; i < lessonsToSeed.length; i++) {
        const item = lessonsToSeed[i];
        const lesson = await db_1.default.lesson.create({
            data: {
                moduleId: module.id,
                title: item?.title ?? '',
                titleAr: item?.titleAr ?? '',
                description: item?.desc ?? '',
                descriptionAr: item?.descAr ?? '',
                order: i + 1,
            }
        });
        await db_1.default.lessonSlide.create({
            data: {
                lessonId: lesson.id,
                type: 'TEXT',
                content: JSON.stringify({
                    en: { text: item?.contentEn ?? '' },
                    ar: { text: item?.contentAr ?? '' }
                }),
                order: 1
            }
        });
    }
    console.log('Successfully seeded 6 bilingual lessons.');
}
main().catch(e => { console.error(e); process.exit(1); }).finally(async () => { await db_1.default.$disconnect(); });
//# sourceMappingURL=seedLessons.js.map