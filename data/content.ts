import { Guide, BlogPost } from '../types';

export const guides: Guide[] = [
  {
    id: 'budgeting-basics',
    title: 'Budgeting Basics - How to Create & Manage Your Budget',
    summary: 'Master personal budgeting with the 50/30/20 rule and zero-based budgeting. Learn how to track expenses and take control of your money.',
    iconName: 'PieChart',
    sections: [
      {
        title: 'Why You Need a Budget',
        content: "A budget isn't about restriction; it's about freedom. It gives you permission to spend without guilt and ensures your bills are paid. Whether you live in a big city or a small town, the principles remain the same: Income - Expenses = Savings."
      },
      {
        title: 'The 50/30/20 Rule',
        content: "One of the most popular methods is the 50/30/20 rule. Allocate 50% of your income to needs (rent/mortgage, groceries, utilities), 30% to wants (dining out, entertainment, hobbies), and 20% to savings and debt repayment. This simple framework scales with your income."
      },
      {
        title: 'Actionable Steps',
        content: "1. Track your spending for 30 days.\n2. Categorize expenses into Needs, Wants, and Savings.\n3. Adjust your spending to fit the 50/30/20 model.\n4. Review and tweak monthly."
      }
    ]
  },
  {
    id: 'saving-strategies',
    title: 'How to Save Money - Emergency Fund & Savings Strategies',
    summary: 'Build an emergency fund and learn proven saving strategies for short-term and long-term financial goals. Start building wealth today.',
    iconName: 'PiggyBank',
    sections: [
      {
        title: 'The Emergency Fund',
        content: "Before investing, ensure you have an emergency fund covering 3-6 months of living expenses. Keep this in a High-Yield Savings Account (HYSA) or a tax-advantaged savings account so it earns interest but remains liquid."
      },
      {
        title: 'Automate Your Savings',
        content: "Pay yourself first. Set up an automatic transfer on payday from your checking account to your savings account. You won't miss money you never saw in your spending balance."
      },
      {
        title: 'Goal-Based Saving',
        content: "Separate your savings into 'buckets' for specific goals: Travel, Down Payment, New Car. Many modern banks allow you to create sub-accounts or 'vaults' for this purpose."
      }
    ]
  },
  {
    id: 'credit-debt',
    title: 'Credit & Debt Management - Improve Score & Pay Off Debt',
    summary: 'Understand credit scores and use proven strategies like Snowball and Avalanche methods to eliminate debt quickly. Rebuild your credit score.',
    iconName: 'CreditCard',
    sections: [
      {
        title: 'Understanding Your Score',
        content: "Your credit score is a numerical representation of your creditworthiness. Lenders use it to decide whether to lend you money and at what interest rate. To keep it healthy, keep your credit utilization low (ideally under 30%) and never miss a payment."
      },
      {
        title: 'Snowball vs. Avalanche',
        content: "To pay off debt: \n\n**Snowball Method:** Pay off the smallest balance first for quick psychological wins.\n\n**Avalanche Method:** Pay off the highest interest rate first to save the most money mathematically. Choose the one that keeps you motivated."
      },
      {
        title: 'Consolidation',
        content: "If you have multiple high-interest debts, consider a balance transfer card or a consolidation loan with a lower interest rate to simplify payments and reduce costs."
      }
    ]
  },
  {
    id: 'smart-spending',
    title: 'Smart Spending - Cut Costs & Get Better Value',
    summary: 'Learn intentional spending tips to cut unnecessary costs, reduce expenses, and get maximum value for your money.',
    iconName: 'ShoppingBag',
    sections: [
      {
        title: 'The 24-Hour Rule',
        content: "For any non-essential purchase involving a significant amount of money, wait 24 hours. Often, the impulse to buy fades, saving you money."
      },
      {
        title: 'Quality vs. Quantity',
        content: "It is often cheaper to buy one high-quality item that lasts 5 years than a cheap item that breaks every 6 months. This is known as the 'Vimes Boots' theory of economic unfairness, but you can use it to your advantage."
      },
      {
        title: 'Subscription Audit',
        content: "Review your bank statements. Are you paying for streaming services, gym memberships, or apps you don't use? Cancel them. That money adds up over the year—enough for a nice dinner or a start to an investment account."
      }
    ]
  },
  {
    id: 'investing-intro',
    title: 'Beginner\'s Guide to Investing - Index Funds & Wealth Building',
    summary: 'Start investing with index funds and retirement accounts. Learn about compound interest and grow your wealth over time.',
    iconName: 'TrendingUp',
    sections: [
      {
        title: 'Compound Interest',
        content: "Compound interest is interest on interest. The earlier you start, the less you need to save to reach your goals. Time is your biggest asset."
      },
      {
        title: 'Tax-Advantaged Accounts',
        content: "Most governments offer special accounts to encourage saving for retirement (like 401(k)s, ISAs, or RRSPs). These accounts protect your gains from taxes or offer tax breaks on contributions, accelerating your wealth growth."
      },
      {
        title: 'Low-Cost Index Funds',
        content: "Don't try to beat the market. Buying a low-cost index fund (like the S&P 500 or a Global All-Cap) gives you instant diversification and historically averages solid positive returns annually over long periods."
      }
    ]
  },
  {
    id: 'financial-tools',
    title: 'Financial Tools & Calculators - Budgeting & Investment Apps',
    summary: 'Discover financial apps and calculators to automate budgeting, track expenses, and calculate investment returns.',
    iconName: 'Calculator',
    sections: [
      {
        title: 'Budgeting Apps',
        content: "Modern budgeting apps connect to your banks to track spending automatically. Look for popular options like YNAB (You Need A Budget), PocketGuard, or bank-specific tools that categorize your expenses for you."
      },
      {
        title: 'Investment Platforms',
        content: "Look for low-fee brokerages in your region. Many modern platforms offer commission-free trading and fractional shares, allowing you to start investing with very little money."
      },
      {
        title: 'Savings Estimator',
        content: "Use our interactive calculator below to see how your savings can grow over time."
      }
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Ways to Improve Your Credit Score in 2024 - Fast Credit Building',
    excerpt: 'Simple, actionable steps to boost your credit score quickly, no matter where you live. Learn proven tactics to increase credit ratings.',
    date: 'October 10, 2024',
    author: 'Sarah Jenkins',
    category: 'Credit',
    imageUrl: 'https://picsum.photos/seed/money/800/400',
    content: "Improving your credit score is one of the highest ROI activities you can do. A better score means lower mortgage rates, better car loan terms, and sometimes even better insurance rates. Start by checking your report for errors. Contact your local credit bureau to get a free report. Pay down high balances to lower your utilization ratio below 30%, and never, ever miss a payment."
  },
  {
    id: '2',
    title: 'How to Inflation-Proof Your Budget - Save Money During Rising Costs',
    excerpt: 'Rising costs at the grocery store? Here is how to adjust your budget and reduce expenses to handle inflation without stress.',
    date: 'October 5, 2024',
    author: 'David Chen',
    category: 'Budgeting',
    imageUrl: 'https://picsum.photos/seed/budget/800/400',
    content: "Inflation erodes purchasing power. To combat this, you need to prioritize. Switch to generic brands for groceries (often made in the same factory as brand names). Bulk buy non-perishables. Review your energy consumption—small changes in thermostat settings can save significantly over a year. Finally, negotiate! Call your service providers and ask for a better rate. Loyalty rarely pays; switching often does."
  },
  {
    id: '3',
    title: 'The Magic of Compound Interest - Grow Your Wealth Exponentially',
    excerpt: 'Why saving a small amount today is worth more than saving double that in ten years. Learn the power of compound interest.',
    date: 'September 28, 2024',
    author: 'Emily Thorne',
    category: 'Investing',
    imageUrl: 'https://picsum.photos/seed/growth/800/400',
    content: "Einstein reportedly called compound interest the eighth wonder of the world. Here's why: If you invest monthly starting at age 25 with a 7% return, you'll have significantly more by retirement than if you started just ten years later with double the monthly contribution. Start small, but start now."
  },
  {
    id: '4',
    title: 'Financial Freedom for Freelancers - Manage Variable Income & Taxes',
    excerpt: 'Managing variable income, taxes, and savings when you work for yourself. Build financial security as a freelancer.',
    date: 'September 15, 2024',
    author: 'Michael Ross',
    category: 'Career',
    imageUrl: 'https://picsum.photos/seed/work/800/400',
    content: "Freelancing offers freedom, but it requires discipline. The most important rule: separate your business and personal finances. Open a business checking account. Set aside a percentage of every payment for taxes immediately—do not touch this money. Create a 'buffer' fund equal to one month of expenses so that a late client payment doesn't cause a personal liquidity crisis."
  }
];