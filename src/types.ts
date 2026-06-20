/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CourseCard {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CourseGroup {
  id: string;
  title: string;
  subtitle: string;
  courses: CourseCard[];
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
